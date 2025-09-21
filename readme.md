
# LeetCode Pattern Tracker


This project is a web-based tracker for the most common interview leetcode patterns, Its original intention was just to let me organize my progress better but now it's open for public contribution.

Basic features:
- Visual progress tracking by category, pattern & history
- Easy marking of completed problems (progress saved in browser)
- Add notes to problems
- Dark/Light theme
- Export data


You can employ it for personal use [here](https://p4r1h.github.io/pattern-tracker), If you want to add problems of your own that don't quite fit the guidelines, you can always fork the repo, add them and deploy to your pages.


## Contributing
I welcome contributions to improve the tracker, follow these guidelines:

## Should I Add This Problem or Pattern?

Use the following matrix to decide how to contribute:

| Scenario                                                      | Action                        |
|---------------------------------------------------------------|-------------------------------|
| The problem fits an existing pattern                          | Add to that pattern           |
| The problem is unique and represents a new, broad technique   | Propose a new pattern         |
| The problem is a minor variation of an existing one           | Do not add                    |
| The pattern already exists (even with a different name)       | Do not add                    |
| The problem is obscure, outdated, or not interview-relevant   | Do not add                    |
| The pattern is too specific or narrow                         | Do not add                    |
| The problem is widely recognized and not yet in the tracker   | Add to the best-fit pattern   |
| The pattern is well-known and missing from the tracker        | Propose as a new pattern      |

**Summary:**
- Prefer adding to existing patterns when possible.
- Only propose new patterns if they are broad, recognized, and not already present.
- Avoid duplicates, minor tweaks, or overly niche additions. 

## How to Contribute
1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes (edit `leetcodedata.js` for questions/patterns).
4. Test your changes locally by opening `index.html` in your browser.
5. Submit a pull request with a clear summary of your changes.