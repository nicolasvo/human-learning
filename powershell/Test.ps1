# Boolean

# param(
#   [bool]$ValidNumber = $false
# )

# function FilterNumbers ([array]$Numbers) {
#   $Numbers | ForEach-Object {
#     if ($_ -ge 4) {
#       Write-Output $_
#     } elseif ($_ -eq 1) {
#       Write-Output "I'm the $_." 
#     } else {
#       Write-Output "boi."
#     }
#   }
# }

# [array]$Numbers = 1, 2, 3, 4, 99, 56
# FilterNumbers($Numbers)


# Array

# # $array = @(1, 2, 3, 9, 44)
# [array]$array = 1, 2, 3, 5, 99
# $res = 0
# $array | ForEach-Object {
#     $res = $res + $_
# }
# Write-Output $res
# Write-Output $array.count



# Filter

# # (get-process | get-member)[-1]

# function Test-Process {
#     $result = Get-Process | Where-Object {($_.ProcessName -like "*win*") -and ($_.Handles -ge 200)}
#     $result
# }
# Test-Process





# Environment variable

# [string]$TMP = (Get-Item Env:TMP).Value

# function ListItems {
#   param (
#     [string]$Location
#   )
  
#   $Res = Get-ChildItem $Location | Select-Object -First 1
#   Write-Output $Res.Name
# }

# ListItems($TMP)







# function Ampersand {
#     [CmdletBinding()]
#     param (

#     )
    
#     begin {
        
#     }
    
#     process {
#         & Get-ChildItem
#     }
    
#     end {
        
#     }
# }

# Ampersand



# function AdvancedFunction {
#     [CmdletBinding()]
#     param (
#         [Parameter(ValueFromPipeline=$true)]
#         [string]$Item,
#         [int[]]$Numbers
#     )
    
#     begin {

#     }
    
#     process {
#         Write-Output "You passed this parameter: $Item"
#         # Write-Output "You passed this number: $Numbers"
#         $Numbers | ForEach-Object {
#             Write-Output $_
#         }
#     }
    
#     end {
        
#     }
# }


# AdvancedFunction -Item "boi"
# "bae" | AdvancedFunction
# AdvancedFunction -Numbers 1, 2, 3, 4
# 3, 4, 5 | AdvancedFunction
# @(3, 4, 5) | AdvancedFunction



