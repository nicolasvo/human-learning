# Get-NetIPAddress | Where-Object {$_.PrefixLength -eq '16'} | Select-Object -First 1 | Select-Object {$_.InterfaceAlias}
Get-NetIPAddress | Where-Object { $_.AddressFamily -eq 'IPv4' } | ForEach-Object IPAddress | Select-Object -Last 5
1, 2, 3, 4, 9 | Where-Object { $_ -ge 3 }