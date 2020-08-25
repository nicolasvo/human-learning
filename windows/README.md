Steps:
- run `Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0`
- run `Set-Service -Name sshd -StartupType 'Automatic'`
- run `Start-Service sshd`
- copy sshd_config to C:\ProgramData\ssh\sshd_config
- create administrators_authorized_keys at C:\ProgramData\ssh
- run `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`
- run `choco install git`
- run `Install-Module posh-git -Scope CurrentUser -AllowPrerelease -Force`
- restart

For installing IIS:
- run `Install-WindowsFeature -name Web-Server -IncludeManagementTools`