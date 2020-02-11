$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$sut = (Split-Path -Leaf $MyInvocation.MyCommand.Path) -replace '\.Tests\.', '.'
. "$here\$sut"

Describe "HelloWorld" {
    Context "HelloWorld" {
        It "returns Hello World" {
            HelloWorld | Should Be "Hello World"
        }
        # Be is not case sensitive
        It "returns Hello World" {
            HelloWorld | Should Be "hello world"
        }
        # Be exactly is case sensitive
        It "returns Hello World" {
            HelloWorld | Should -BeExactly "Hello World"
        }
    }
    Context "GenerateArray" {
        $Numbers = 1, 2, 3, 4
        It "returns the array 1, 2, 3" {
            $Numbers | Should -BeExactly @(1, 2, 3, 4)
        }
        It "contains the integer 2" {
            2 | Should BeIn $Numbers
        }
        It "has 4 as fourth element" {
            ($Numbers[3]) | Should Be 4 
        }
        It "has a length of 4" {
            $Numbers.Length | Should Be 4
        }
        # TODO: check parameter type
        It "has a parameter Size" {
            Get-Command GenerateArray | Should HaveParameter Size
            # Get-Command GenerateArray | Should HaveParameter test -Type String
        }
    }
    Context "Type checking" {
        It "tests type checking" {
            "test" | should -BeOfType string
            2 | should -BeOfType int
            2 | should -BeOfType System.Int32
            $Array = @(1, 2, 3)
            # $Array | should -BeOfType array
            $Array.GetType().BaseType.Name | should be "Array"

            # [string[]]$Array2 = @('a', 'b', 'c')
            # $Array2 | should beoftype array

            $Hashtable = @{
                Test = 'boi'
            }
            $Hashtable | should beoftype hashtable

        }
        BeforeEach {
            $Numbers = GenerateArray -Size 4
        }
    }
    Context "Play with mocking" {
        Mock Get-RandomObject {
            $Object = New-Object PSObject -Property @{RandomProperty = 'MockedProperty'} 

            Add-Member -InputObject $Object -MemberType ScriptMethod -Name UpperCase -Value {
                return $this.RandomProperty.ToUpper()
            }
            return $Object
        }
        It "mocks an object" {
            $Object = Get-RandomObject
            $Object.RandomProperty | should be 'MockedProperty' 
            $Object.UpperCase() | should beexactly 'MOCKEDPROPERTY'
        }
    }
}