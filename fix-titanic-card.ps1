$repo = "C:\Users\HP\my-portfolio"
$file = "$repo\src\data\projects.js"

Copy-Item $file "$file.bak" -Force

$oldBlock = @"
  {
    slug: "titanic",
    title: "Voyage of Fate: Titanic Survival Analysis & Predictive Modeling",
    description: "A statistical analysis of Titanic passenger survival patterns using a 714-record dataset. Leveraged Excel and Tableau to examine the impact of passenger class, gender and demographics on survival outcomes. Higher survival rates for first-class passengers and women highlighted socio-economic disparities.",
    method: "Excel • Tableau • Data Cleaning • EDA • Dashboarding • Visualization • Survival Analysis • Class& Gender Impact • Historical Data Interpretation",
    impact: "Highlighted key survival drivers for modeling through descriptive analysis.",
    role: "Data Scientist",
    tech: ["Python", "Statistics", "EDA"],
    featured: true,
    blog: "https://medium.com/@yemifatodu/the-titanic-disaster-8b0183632f9",
    dashboard: "https://public.tableau.com/app/profile/yemi.fatodu1473/viz/TitleVoyageofFateUnravelingtheTitanicTragedy/Dashboard1",
    repo: "https://github.com/yemifatodu/THE-TITANIC-PROJECT-VOYAGE-OF-FATE"
  },
"@

$newBlock = @"
  {
    slug: "titanic-survival-analysis",
    title: "Voyage of Fate - Titanic Survival Analysis by Passenger Class & Gender",
    description: "A data analysis of the RMS Titanic disaster - 714 complete passenger records from Kaggle, segmented by class and gender, with a verified breakdown of who survived and why, plus an interactive Tableau dashboard.",
    method: "Python • Excel • Tableau • Data Cleaning • EDA • Dashboarding • Survival Analysis • Class & Gender Impact • Historical Data Interpretation",
    impact: "40.6% sample survival rate vs. 31.9% historical - First Class survived at 65.6% vs. 23.9% in Third Class",
    role: "Data Scientist",
    tech: ["Python", "Statistics", "EDA"],
    featured: true,
    blog: "https://medium.com/@yemifatodu/the-titanic-disaster-8b0183632f9",
    dashboard: "https://public.tableau.com/app/profile/yemi.fatodu1473/viz/TitleVoyageofFateUnravelingtheTitanicTragedy/Dashboard1",
    repo: "https://github.com/yemifatodu/THE-TITANIC-PROJECT-VOYAGE-OF-FATE"
  },
"@

$content = Get-Content $file -Raw

if ($content -notmatch [regex]::Escape($oldBlock)) {
    Write-Host "WARNING: exact match not found - no changes made." -ForegroundColor Red
    Write-Host "Run this and paste the output back:" -ForegroundColor Yellow
    Write-Host '  Get-Content "C:\Users\HP\my-portfolio\src\data\projects.js" | Select-String -Pattern "titanic" -Context 0,12'
} else {
    $content = $content -replace [regex]::Escape($oldBlock), $newBlock
    Set-Content $file $content -Encoding utf8
    Write-Host "Replaced successfully." -ForegroundColor Green
    Write-Host "Verifying..." -ForegroundColor Cyan
    Get-Content $file | Select-String -Pattern "titanic-survival-analysis"
}
