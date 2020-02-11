$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$sut = (Split-Path -Leaf $MyInvocation.MyCommand.Path) -replace '\.Tests\.', '.'
. "$here\$sut"

Describe "FileSystemUtility" {
    $fs = New-Object Boginya
    Context "Creation" {
        It "creates a folder" {
            $fs.CreateFolder("TestFolder")
            (Test-Path $(Join-Path $fs.CurrentLocation "TestFolder")) | should be $true
        }
        # It "should throw a WriteError because folder already exists" {
        # }
        It "creates a file" {
            $fs.CreateFile("TestFolder", "TestFile")
        }
        It "writes in a file" {
            $fs.WriteFile("TestFolder", "TestFile", "test")
            $content = Get-Content $(Join-Path (Join-Path $fs.CurrentLocation "TestFolder") "TestFile")
            $content | should be "test"
            $content | should belike "te*"
            $content | should match "t.st"
            $content | should match "^t*"
            $content | should not match "....."
           
        }
    }
    Context "Destruction" {
        It "removes a folder" {
            $fs.RemoveFolder("TestFolder")
            (Test-Path $(Join-Path $fs.CurrentLocation "TestFolder")) | should be $false
        }
    }
}