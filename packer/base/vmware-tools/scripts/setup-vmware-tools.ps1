$path = "e:/setup64.exe"
$args = '/s /v /qn reboot=r'
Start-Process -FilePath $path -ArgumentList $args -Wait