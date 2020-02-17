# set-psdebug -trace 1

$ProgressPreference = 'SilentlyContinue'
$ErrorActionPreference = 'Stop'
$VerbosePreference = "Continue"

# The script sets up the MSSQL Dev Edition and sets the sa password
# Also it attaches additional database from the disk

### See: https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server-on-server-core

$sa_password=$env:SA_PASSWORD
$ACCEPT_EULA=$env:ACCEPT_EULA
$attach_dbs=$env:ATTACH_DBS_JSON

# $exe="https://go.microsoft.com/fwlink/?linkid=840945"
# $box="https://go.microsoft.com/fwlink/?linkid=840944"


# Invoke-WebRequest -Uri $exe -OutFile SQL.exe -UseBasicParsing
# Invoke-WebRequest -Uri $box -OutFile SQL.box -UseBasicParsing

# Start-Process -Wait -FilePath .\SQL.exe -ArgumentList /qs, /x:setup ;

# d:\setup.exe /Q /Action=Uninstall /FEATURES=SQLEngine /INSTANCENAME=MSSQLSERVER

d:\setup.exe /q /ACTION=Install /INSTANCENAME=MSSQLSERVER /FEATURES=SQLEngine,FullText,Replication,Conn /UPDATEENABLED=0 /SQLSVCACCOUNT='NT AUTHORITY\NETWORK SERVICE' /SQLSYSADMINACCOUNTS='BUILTIN\ADMINISTRATORS' /TCPENABLED=1 /NPENABLED=0 /IACCEPTSQLSERVERLICENSETERMS ;

stop-service MSSQLSERVER;
set-itemproperty -path 'HKLM:\software\microsoft\microsoft sql server\mssql14.MSSQLSERVER\mssqlserver\supersocketnetlib\tcp\ipall' -name tcpdynamicports -value '' ;
set-itemproperty -path 'HKLM:\software\microsoft\microsoft sql server\mssql14.MSSQLSERVER\mssqlserver\supersocketnetlib\tcp\ipall' -name tcpport -value 1433 ;
set-itemproperty -path 'HKLM:\software\microsoft\microsoft sql server\mssql14.MSSQLSERVER\mssqlserver\' -name LoginMode -value 2 ;

Install-PackageProvider -Name 'NuGet' -MinimumVersion 2.8.5.201 -Force;
Set-PSRepository -Name 'PSGallery' -InstallationPolicy 'Trusted';
Install-Module SqlServer -AllowClobber;
Import-Module SqlServer;


if($ACCEPT_EULA -ne "Y" -And $ACCEPT_EULA -ne "y")
{
	Write-Verbose "ERROR: You must accept the End User License Agreement before this container can start."
	Write-Verbose "Set the environment variable ACCEPT_EULA to 'Y' if you accept the agreement."

    exit 1
}

Set-Service -Name MSSQLSERVER -StartupType Automatic

# start the service
Write-Verbose "Starting SQL Server"
start-service MSSQLSERVER

Write-Verbose "Started SQL Server."

# if($sa_password -eq "_") {
    # if (Test-Path $sa_password_path) {
        # $sa_password = Get-Content -Raw $secretPath
    # }
    # else {
        # Write-Verbose "WARN: Using default SA password, secret file not found at: $secretPath"
    # }
# }

if($sa_password -ne "_")
{
    Write-Verbose "Changing SA login credentials"
    $sqlcmd = "ALTER LOGIN sa with password=" +"'" + $sa_password + "'" + ";ALTER LOGIN sa ENABLE;"
    & Invoke-Sqlcmd -Query $sqlcmd
}

### Allowing remote access

Invoke-Sqlcmd -Query "EXEC sys.sp_configure N'remote access', N'1';RECONFIGURE WITH OVERRIDE"

Set-Service -Name SQLBROWSER -StartupType Automatic

start-service SQLBROWSER

$smo = 'Microsoft.SqlServer.Management.Smo.'  
$wmi = new-object ($smo + 'Wmi.ManagedComputer')  
# Enable the TCP protocol on the default instance.  If the instance is named, replace MSSQLSERVER with the instance name in the following line.  
$uri = "ManagedComputer[@Name='" + (get-item env:\computername).Value + "']/ServerInstance[@Name='MSSQLSERVER']/ServerProtocol[@Name='Tcp']"  
$Tcp = $wmi.GetSmoObject($uri)  
$Tcp.IsEnabled = $true  
$Tcp.Alter()  
$Tcp

d:\Setup.exe /q /Action=RunDiscovery

# Remove-Item -Recurse -Force SQL.exe, SQL.box, setup
