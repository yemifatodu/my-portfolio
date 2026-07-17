$file = "C:\Users\HP\my-portfolio\src\data\projects.js"
Copy-Item $file "$file.bak2" -Force

$content = Get-Content $file -Raw
$fail = @()

$pairs = @(
  @{
    old = '    slug: "titanic",'
    new = '    slug: "titanic-survival-analysis",'
  },
  @{
    old = '    title: "Voyage of Fate: Titanic Survival Analysis & Predictive Modeling",'
    new = '    title: "Voyage of Fate - Titanic Survival Analysis by Passenger Class & Gender",'
  },
  @{
    old = '    description: "A statistical analysis of Titanic passenger survival patterns using a 714-record dataset. Leveraged Excel and Tableau to examine the impact of passenger class, gender and demographics on survival outcomes. Higher survival rates for first-class passengers and women highlighted socio-economic disparities.",'
    new = '    description: "A data analysis of the RMS Titanic disaster - 714 complete passenger records from Kaggle, segmented by class and gender, with a verified breakdown of who survived and why, plus an interactive Tableau dashboard.",'
  },
  @{
    old = '      method: "Excel • Tableau • Data Cleaning • EDA • Dashboarding • Visualization • Survival Analysis • Class & Gender Impact • Historical Data Interpretation",'
    new = '      method: "Python • Excel • Tableau • Data Cleaning • EDA • Dashboarding • Survival Analysis • Class & Gender Impact • Historical Data Interpretation",'
  },
  @{
    old = '      impact: "Highlighted key survival drivers for modeling through descriptive analysis.",'
    new = '      impact: "40.6% sample survival rate vs. 31.9% historical - First Class survived at 65.6% vs. 23.9% in Third Class",'
  }
)

foreach ($p in $pairs) {
    if ($content.Contains($p.old)) {
        $content = $content.Replace($p.old, $p.new)
    } else {
        $fail += $p.old
    }
}

if ($fail.Count -gt 0) {
    Write-Host "WARNING: $($fail.Count) line(s) did not match - NO changes were saved." -ForegroundColor Red
    foreach ($f in $fail) { Write-Host "  MISSING: $f" -ForegroundColor Yellow }
} else {
    Set-Content $file $content -Encoding utf8
    Write-Host "All 5 fields replaced successfully." -ForegroundColor Green
    Write-Host "Verifying..." -ForegroundColor Cyan
    Get-Content $file | Select-String -Pattern "titanic-survival-analysis"
}
