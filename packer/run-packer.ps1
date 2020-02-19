param (
    $ConfigFileName = '',
    $EnvFileName = '',
    $ValidateOnly = $false
)

# This script prepares template for packer build, runs validate and build
# Example: run-packer.ps1 [-ConfigFileName] <Template file> [-EnvFileName] [Env file] [-ValidateOnly:$true]

$ErrorActionPreference = 'Stop'

if ($ConfigFileName -eq '') {
    Write-Error "Parameter ConfigFileName not defined!"
    exit 1
}

$ts = Get-Date -Format yyMM.dd.HHmmss

$cfgName = ((Split-Path $ConfigFileName -Leaf) -split '\.')[0]

$envName = '-'
if ($EnvFileName -ne '') {
    $envName = ((Split-Path $EnvFileName -Leaf) -split '\.')[0]
}
$env:PACKER_LOG_PATH = Join-Path -Path 'logs' -ChildPath "packer.${cfgName}.${envName}.$ts.log"
$env:PACKER_LOG = 1

if (Test-Path -PathType Leaf -Path "~/azure_account.ps1") {
    . ~/azure_account.ps1
}

if (Test-Path -PathType Leaf -Path "./azure_account.ps1") {
    . ./azure_account.ps1
}

$cfg = Get-Content $ConfigFileName | Where-Object { $_ -notmatch '^[\s|\t]*//' }
if ( ($EnvFileName -ne '') -and (Test-Path -Path $EnvFileName )) {
    $eftmp = Join-Path -Path $env:TEMP -ChildPath "packer_env_$ts.json"
    Get-Content $EnvFileName | Where-Object { $_ -notmatch '^[\s|\t]*//' } | Out-File $eftmp -Encoding ascii
    $cfg | packer validate -var-file="$eftmp" -
    if ($ValidateOnly -eq $false) {
        $cfg | packer build --timestamp-ui -var-file="$eftmp" -
    }
    Remove-Item $eftmp
} else {
    $cfg | packer validate -
    if ($ValidateOnly -eq $false) {
        $cfg | packer build --timestamp-ui -
    }
}
