export const recentYear = 2025; // Update this with the most recent year that awards are updated for
export const awards = [ // Update this with the actual awards; most recent year is index 0
    [
        "National Council of Teachers of English (PRESLM)- 1st Class",
        "Columbia Scholastic Press Association (CSPA) – Gold with All-Columbian Honors awarded for Verbal and Visual Sections",
        "Empire State School Press Association (ESSPA) – Best Overall Literary Arts Magazine – Gold",
        "National Scholastic Press Association (NSPA) - Design of the Year—Literary/Specialty Magazine Page/Spread- Honorable Mention"
    ],
    [
        "American Scholastic Press Association (ASPA)-- 1st Place",
        "National Scholastic Press Association (NSPA)— All-American w/ Four Marks of Distinction",
        "National Council of Teachers of English (NCTE) PRESLM— First Class",
        "Empire State Scholastic Press Association (ESSPA)-- Gold Award and Best Overall Literary Arts Magazine"
    ],
    [
        "Columbia Scholastic Press Association (CSPA)-- Silver Crown Award",
        "Empire State Scholastic Press Association (ESSPA)-- Silver Award",
        "National Scholastic Press Association (NSPA)-- 1st Class w/ Three Marks of Distinction",
        "American Scholastic Press Association (ASPA)-- 1st Place w/ Special Merit"
    ],
    [
        "National Scholastic Press Association (NSPA)— All-American w/ Four Marks of Distinction",
        "American Scholastic Press Association (ASPA)— 1st Place",
        "Columbia Scholastic Press Association (CSPA)— Silver Crown Award",
        "National Council of English Teachers (NCTE)— Recognizing Excellence in Art and Literary Magazines Award (REALM) -- Superior",
        "Empire State Scholastic Press Association (ESSPA)— Best Overall"
    ],
    [
        "Columbia Scholastic Press Association (CSPA)— Silver Crown Award",
        "Empire State Scholastic Press Association (ESSPA)— Best Overall Literary Magazine"
    ],
    [
        "National Council of Teachers of English (NCTE) PRESLM— First Class",
        "American Scholastic Press Association (ASPA)— 1st Place",
        "Columbia Scholastic Press Association (CSPA)— Gold Medalist",
        "National Scholastic Press Association (NSPA)— 1st Class",
        "Empire State Scholastic Press Association (ESSPA)— Gold Overall"
    ],
    [
        "National Council of Teachers of English (NCTE) PRESLM— First Class",
        "American Scholastic Press Association (ASPA)— 1st Place",
        "Columbia Scholastic Press Association (CSPA)— Gold Medalist",
        "National Scholastic Press Association (NSPA)— 1st Class",
        "Empire State Scholastic Press Association (ESSPA)— Gold Overall"
    ],
    [
        "National Council of Teachers of English (NCTE) REALM— 1st Place",
        "American Scholastic Press Association (ASPA)— 1st Place",
        "Columbia Scholastic Press Association (CSPA)— Gold Medalist",
        "National Scholastic Press Association (NSPA)— 1st Class",
        "Empire State Scholastic Press Association (ESSPA)— Gold Overall"
    ],
    [
        "National Council of Teachers of English (NCTE) PRESLM— Highest Award",
        "American Scholastic Press Association (ASPA)— 1st Place",
        "Columbia Scholastic Press Association (CSPA)— Gold Medalist",
        "National Scholastic Press Association (NSPA)— 1st Class with one mark of distinction",
        "Empire State Scholastic Press Association (ESSPA)— Gold Overall"
    ]
];


// Unless Briars and Ivy applies for new awards with new weird formatting, you shouldn't need to edit this. 
// The most you'll need to edit is the .orgs array
export const awardCategories = {
    // Organizations and their Scope
    "orgs": [
        { id: "ESSPA", name: "Empire State Scholastic Press Association", scope: "nys" },
        { id: "NSPA", name: "National Scholastic Press Association", scope: "national" },
        { id: "ASPA", name: "American Scholastic Press Association", scope: "national" },
        { id: "CSPA", name: "Columbia Scholastic Press Association", scope: "national" },
        { id: "NCTE", name: "National Council of Teachers of English", scope: "national" },
        { id: "REALM", name: "Recognizing Excellence in Art and Literary Magazines", scope: "national" },
        { id: "PRESLM", name: "Program to Recognize Excellence in Student Literary Magazines", scope: "national" }
    ],

    // Keyword matching for Medal/Rank Levels
    levels: [
        ["Best", "Highest Award", "First Class", "Gold", "Superior", "1st Place", "First Place", "1st Class", "Distinction", "Design of the Year"],
        ["Silver", "Second Class", "2nd Class", "2nd Place", "Second Place"],
        ["Bronze", "Mark of Distinction", "Honorable Mention", "Third Class", "3rd Class", "3rd Place", "Third Place", " "] // Don't remove that space; it holds a purpose.
    ]
};

export function updateAwards(i) {
        let returnAwards = [];
        for (let k = 0; k < awards[i].length; k++) {
            let toAdd = [];
            toAdd.push(awards[i][k]);
            let org = "";
            for (let x = 0; x < awardCategories.orgs.length; x++) {
                if (awards[i][k].indexOf(awardCategories.orgs[x].id) != -1) {
                    org = awardCategories.orgs[x].scope;
                    break;
                }
            }
            if (org == "") {
                org = "national";
            }
            search: for (let x = 0; x < awardCategories.levels.length; x++) {
                for (let r = 0; r < awardCategories.levels[x].length; r++) {
                    if (awards[i][k].indexOf(awardCategories.levels[x][r]) != -1) {
                        if (x == 0) {
                            toAdd.push(org + "Gold");
                        }
                        else if (x == 1) {
                            toAdd.push(org + "Silver");
                        }
                        else {
                            toAdd.push(org + "Bronze");
                        }
                        break search;
                    }
                }
            }
            returnAwards.push(toAdd);
        }
        return returnAwards;
    }