function HelloWorld {
    "Hello World"
}

function GenerateArray {
    param (
        [int]$Size,
        [string]$test
    )
    
    [array]$Numbers = 1..$Size
    $Numbers
    
}

function Get-RandomObject {
    $Object = New-Object PSObject -Property @{
        RandomProperty = "ActualProperty"
    }

    Add-Member -InputObject $Object -MemberType ScriptMethod -Name UpperCase -Value {
        return $this.RandomProperty.ToUpper()
    }

    $Object
}

# $Object = Get-RandomObject
# $Object.UpperCase()