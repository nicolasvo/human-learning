class Boginya {
    [string]$CurrentLocation = $(Get-Location)

    [void] CreateFolder($Name) {
        New-Item -Path $(Join-Path -Path $this.CurrentLocation -ChildPath $Name) -Type Directory
    }
    [void] RemoveFolder($Name) {
        Remove-Item -Path $(Join-Path -Path $this.CurrentLocation -ChildPath $Name) -Recurse
    }
    [void] CreateFile($Path, $Name) {
        New-Item -Path $(Join-Path -Path $this.CurrentLocation -ChildPath $Path) -Name $Name 
    }
    [void] WriteFile($Path, $Name, $Text) {
        $Text | Out-File $(Join-Path (Join-Path $this.CurrentLocation $Path) $Name)
    }
}