/*
category: string
patterns: array
patterns[i]: {name : string, problems : array}
patterns[i]["problems"] = {name : string, difficulty : char/string}
*/

const leetcodeData = [
    {
        category: "I. Two Pointer Patterns",
        patterns: [
            { name: "Two Pointers - Converging (Sorted Array Target Sum)", problems: [ { name: "1. Two Sum", difficulty: "E" }, { name: "11. Container With Most Water", difficulty: "M" }, { name: "15. 3Sum", difficulty: "M" }, { name: "16. 3Sum Closest", difficulty: "M" }, { name: "18. 4Sum", difficulty: "M" }, { name: "167. Two Sum II - Input Array Is Sorted", difficulty: "M" }, { name: "349. Intersection of Two Arrays", difficulty: "E" }, { name: "881. Boats to Save People", difficulty: "M" }, { name: "977. Squares of a Sorted Array", difficulty: "E" }, { name: "259. 3Sum Smaller", difficulty: "M" } ] },
            { name: "Two Pointers - Fast & Slow (Cycle Detection)", problems: [ { name: "141. Linked List Cycle", difficulty: "E" }, { name: "202. Happy Number", difficulty: "E" }, { name: "287. Find the Duplicate Number", difficulty: "M" }, { name: "392. Is Subsequence", difficulty: "E" } ] },
            { name: "Two Pointers - Fixed Separation (Nth Node from End)", problems: [ { name: "19. Remove Nth Node From End of List", difficulty: "M" }, { name: "876. Middle of the Linked List", difficulty: "E" }, { name: "2095. Delete the Middle Node of a Linked List", difficulty: "M" } ] },
            { name: "Two Pointers - In-place Array Modification", problems: [ { name: "26. Remove Duplicates from Sorted Array", difficulty: "E" }, { name: "27. Remove Element", difficulty: "E" }, { name: "75. Sort Colors", difficulty: "M" }, { name: "80. Remove Duplicates from Sorted Array II", difficulty: "M" }, { name: "283. Move Zeroes", difficulty: "E" }, { name: "443. String Compression", difficulty: "M" }, { name: "905. Sort Array By Parity", difficulty: "E" }, { name: "2337. Move Pieces to Obtain a String", difficulty: "M" }, { name: "2938. Separate Black and White Balls", difficulty: "M" } ] },
            { name: "Two Pointers - String Comparison with Backspaces", problems: [ { name: "844. Backspace String Compare", difficulty: "E" } ] },
            { name: "Two Pointers - Expanding From Center (Palindromes)", problems: [ { name: "5. Longest Palindromic Substring", difficulty: "M" }, { name: "647. Palindromic Substrings", difficulty: "M" } ] },
            { name: "Two Pointers - String Reversal", problems: [ { name: "151. Reverse Words in a String", difficulty: "M" }, { name: "344. Reverse String", difficulty: "E" }, { name: "345. Reverse Vowels of a String", difficulty: "E" }, { name: "541. Reverse String II", difficulty: "E" } ] }
        ]
    },
    {
        category: "II. Sliding Window Patterns",
        patterns: [
            { name: "Sliding Window - Fixed Size (Subarray Calculation)", problems: [ { name: "346. Moving Average from Data Stream", difficulty: "E" }, { name: "643. Maximum Average Subarray I", difficulty: "E" }, { name: "2985. Calculate Compressed Mean", difficulty: "H" }, { name: "3254. Find the Power of K-Size Subarrays I", difficulty: "M" }, { name: "3318. Find X-Sum of All K-Long Subarrays I", difficulty: "M" } ] },
            { name: "Sliding Window - Variable Size (Condition-Based)", problems: [ { name: "3. Longest Substring Without Repeating Characters", difficulty: "M" }, { name: "76. Minimum Window Substring", difficulty: "H" }, { name: "209. Minimum Size Subarray Sum", difficulty: "M" }, { name: "219. Contains Duplicate II", difficulty: "E" }, { name: "424. Longest Repeating Character Replacement", difficulty: "M" }, { name: "713. Subarray Product Less Than K", difficulty: "M" }, { name: "904. Fruit Into Baskets", difficulty: "M" }, { name: "1004. Max Consecutive Ones III", difficulty: "M" }, { name: "1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", difficulty: "M" }, { name: "1493. Longest Subarray of 1's After Deleting One Element", difficulty: "M" }, { name: "1658. Minimum Operations to Reduce X to Zero", difficulty: "M" }, { name: "1838. Frequency of the Most Frequent Element", difficulty: "M" }, { name: "2461. Maximum Sum of Distinct Subarrays With Length K", difficulty: "M" }, { name: "2516. Take K of Each Character From Left and Right", difficulty: "M" }, { name: "2762. Continuous Subarrays", difficulty: "M" }, { name: "2779. Maximum Beauty of an Array After Applying Operation", difficulty: "M" }, { name: "2981. Find Longest Special Substring That Occurs Thrice I", difficulty: "M" }, { name: "3026. Maximum Good Subarray Sum", difficulty: "M" }, { name: "3346. Maximum Frequency of an Element After Performing Operations I", difficulty: "M" }, { name: "3347. Maximum Frequency of an Element After Performing Operations II", difficulty: "H" } ] },
            { name: "Sliding Window - Monotonic Queue for Max/Min", problems: [ { name: "239. Sliding Window Maximum", difficulty: "H" }, { name: "862. Shortest Subarray with Sum at Least K", difficulty: "H" }, { name: "1696. Jump Game VI", difficulty: "M" } ] },
            { name: "Sliding Window - Character Frequency Matching", problems: [ { name: "438. Find All Anagrams in a String", difficulty: "M" }, { name: "567. Permutation in String", difficulty: "M" } ] }
        ]
    },
    {
        category: "III. Tree Traversal Patterns (DFS & BFS)",
        patterns: [
            { name: "Tree BFS - Level Order Traversal", problems: [ { name: "102. Binary Tree Level Order Traversal", difficulty: "M" }, { name: "103. Binary Tree Zigzag Level Order Traversal", difficulty: "M" }, { name: "199. Binary Tree Right Side View", difficulty: "M" }, { name: "515. Find Largest Value in Each Tree Row", difficulty: "M" }, { name: "1161. Maximum Level Sum of a Binary Tree", difficulty: "M" } ] },
            { name: "Tree DFS - Recursive Preorder Traversal", problems: [ { name: "100. Same Tree", difficulty: "E" }, { name: "101. Symmetric Tree", difficulty: "E" }, { name: "105. Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "M" }, { name: "114. Flatten Binary Tree to Linked List", difficulty: "M" }, { name: "226. Invert Binary Tree", difficulty: "E" }, { name: "257. Binary Tree Paths", difficulty: "E" }, { name: "988. Smallest String Starting From Leaf", difficulty: "M" } ] },
            { name: "Tree DFS - Recursive Inorder Traversal", problems: [ { name: "94. Binary Tree Inorder Traversal", difficulty: "E" }, { name: "98. Validate Binary Search Tree", difficulty: "M" }, { name: "173. Binary Search Tree Iterator", difficulty: "M" }, { name: "230. Kth Smallest Element in a BST", difficulty: "M" }, { name: "501. Find Mode in Binary Search Tree", difficulty: "E" }, { name: "530. Minimum Absolute Difference in BST", difficulty: "E" } ] },
            { name: "Tree DFS - Recursive Postorder Traversal", problems: [ { name: "104. Maximum Depth of Binary Tree", difficulty: "E" }, { name: "110. Balanced Binary Tree", difficulty: "E" }, { name: "124. Binary Tree Maximum Path Sum", difficulty: "H" }, { name: "145. Binary Tree Postorder Traversal", difficulty: "E" }, { name: "337. House Robber III", difficulty: "M" }, { name: "366. Find Leaves of Binary Tree", difficulty: "M" }, { name: "543. Diameter of Binary Tree", difficulty: "E" }, { name: "863. All Nodes Distance K in Binary Tree", difficulty: "M" }, { name: "1110. Delete Nodes And Return Forest", difficulty: "M" }, { name: "2458. Height of Binary Tree After Subtree Removal Queries", difficulty: "H" } ] },
            { name: "Tree - Lowest Common Ancestor (LCA) Finding", problems: [ { name: "235. Lowest Common Ancestor of a Binary Search Tree", difficulty: "M" }, { name: "236. Lowest Common Ancestor of a Binary Tree", difficulty: "M" } ] },
            { name: "Tree - Serialization and Deserialization", problems: [ { name: "297. Serialize and Deserialize Binary Tree", difficulty: "H" }, { name: "572. Subtree of Another Tree", difficulty: "E" }, { name: "652. Find Duplicate Subtrees", difficulty: "M" } ] }
        ]
    },
    {
        category: "IV. Graph Traversal Patterns (DFS & BFS)",
        patterns: [
            { name: "Graph DFS - Connected Components / Island Counting", problems: [ { name: "130. Surrounded Regions", difficulty: "M" }, { name: "200. Number of Islands", difficulty: "M" }, { name: "417. Pacific Atlantic Water Flow", difficulty: "M" }, { name: "547. Number of Provinces", difficulty: "M" }, { name: "695. Max Area of Island", difficulty: "M" }, { name: "733. Flood Fill", difficulty: "E" }, { name: "841. Keys and Rooms", difficulty: "M" }, { name: "1020. Number of Enclaves", difficulty: "M" }, { name: "1254. Number of Closed Islands", difficulty: "M" }, { name: "1905. Count Sub Islands", difficulty: "M" }, { name: "2101. Detonate the Maximum Bombs", difficulty: "M" } ] },
            { name: "Graph BFS - Connected Components / Island Counting", problems: [ { name: "127. Word Ladder", difficulty: "H" }, { name: "542. 01 Matrix", difficulty: "M" }, { name: "994. Rotting Oranges", difficulty: "M" }, { name: "1091. Shortest Path in Binary Matrix", difficulty: "M" } ] },
            { name: "Graph DFS - Cycle Detection (Directed Graph)", problems: [ { name: "207. Course Schedule", difficulty: "M" }, { name: "210. Course Schedule II", difficulty: "M" }, { name: "802. Find Eventual Safe States", difficulty: "M" }, { name: "1059. All Paths from Source Lead to Destination", difficulty: "M" } ] },
            { name: "Graph BFS - Topological Sort (Kahn's Algorithm)", problems: [ { name: "207. Course Schedule", difficulty: "M" }, { name: "210. Course Schedule II", difficulty: "M" }, { name: "269. Alien Dictionary", difficulty: "H" }, { name: "310. Minimum Height Trees", difficulty: "M" }, { name: "444. Sequence Reconstruction", difficulty: "M" }, { name: "1136. Parallel Courses", difficulty: "H" }, { name: "1857. Largest Color Value in a Directed Graph", difficulty: "H" }, { name: "2050. Parallel Courses III", difficulty: "H" }, { name: "2115. Find All Possible Recipes from Given Supplies", difficulty: "M" }, { name: "2392. Build a Matrix With Conditions", difficulty: "H" } ] },
            { name: "Graph - Deep Copy / Cloning", problems: [ { name: "133. Clone Graph", difficulty: "M" } ] },
            { name: "Graph - Shortest Path (Dijkstra's Algorithm)", problems: [ { name: "743. Network Delay Time", difficulty: "M" }, { name: "778. Swim in Rising Water", difficulty: "H" }, { name: "1514. Path with Maximum Probability", difficulty: "M" }, { name: "1631. Path With Minimum Effort", difficulty: "M" }, { name: "1976. Number of Ways to Arrive at Destination", difficulty: "M" }, { name: "2045. Second Minimum Time to Reach Destination", difficulty: "H" }, { name: "2203. Minimum Weighted Subgraph With the Required Paths", difficulty: "H" }, { name: "2290. Minimum Obstacle Removal to Reach Corner", difficulty: "H" }, { name: "2577. Minimum Time to Visit a Cell In a Grid", difficulty: "H" }, { name: "2812. Find the Safest Path in a Grid", difficulty: "M" } ] },
            { name: "Graph - Shortest Path (Bellman-Ford / BFS+K)", problems: [ { name: "787. Cheapest Flights Within K Stops", difficulty: "M" } ] },
            { name: "Graph - Union-Find (Disjoint Set Union - DSU)", problems: [ { name: "200. Number of Islands", difficulty: "M" }, { name: "261. Graph Valid Tree", difficulty: "M" }, { name: "305. Number of Islands II", difficulty: "H" }, { name: "323. Number of Connected Components in an Undirected Graph", difficulty: "M" }, { name: "547. Number of Provinces", difficulty: "M" }, { name: "684. Redundant Connection", difficulty: "M" }, { name: "721. Accounts Merge", difficulty: "M" }, { name: "737. Sentence Similarity II", difficulty: "M" }, { name: "947. Most Stones Removed with Same Row or Column", difficulty: "M" }, { name: "952. Largest Component Size by Common Factor", difficulty: "H" }, { name: "959. Regions Cut By Slashes", difficulty: "M" }, { name: "1101. The Earliest Moment When Everyone Become Friends", difficulty: "M" } ] }
        ]
    },
    {
        category: "V. Dynamic Programming (DP) Patterns",
        patterns: [
            { name: "DP - 1D Array (Fibonacci Style)", problems: [ { name: "70. Climbing Stairs", difficulty: "E" }, { name: "91. Decode Ways", difficulty: "M" }, { name: "198. House Robber", difficulty: "M" }, { name: "213. House Robber II", difficulty: "M" }, { name: "337. House Robber III", difficulty: "M" }, { name: "509. Fibonacci Number", difficulty: "E" }, { name: "740. Delete and Earn", difficulty: "M" }, { name: "746. Min Cost Climbing Stairs", difficulty: "E" } ] },
            { name: "DP - 1D Array (Kadane's Algorithm for Max/Min Subarray)", problems: [ { name: "53. Maximum Subarray", difficulty: "M" } ] },
            { name: "DP - 1D Array (Coin Change / Unbounded Knapsack Style)", problems: [ { name: "322. Coin Change", difficulty: "M" }, { name: "377. Combination Sum IV", difficulty: "M" }, { name: "518. Coin Change II", difficulty: "M" } ] },
            { name: "DP - 1D Array (0/1 Knapsack Subset Sum Style)", problems: [ { name: "416. Partition Equal Subset Sum", difficulty: "M" }, { name: "494. Target Sum", difficulty: "M" } ] },
            { name: "DP - 1D Array (Word Break Style)", problems: [ { name: "139. Word Break", difficulty: "M" }, { name: "140. Word Break II", difficulty: "H" } ] },
            { name: "DP - 2D Array (Longest Common Subsequence - LCS)", problems: [ { name: "583. Delete Operation for Two Strings", difficulty: "M" }, { name: "1143. Longest Common Subsequence", difficulty: "M" } ] },
            { name: "DP - 2D Array (Edit Distance / Levenshtein Distance)", problems: [ { name: "72. Edit Distance", difficulty: "M" } ] },
            { name: "DP - 2D Array (Unique Paths on Grid)", problems: [ { name: "62. Unique Paths", difficulty: "M" }, { name: "63. Unique Paths II", difficulty: "M" }, { name: "64. Minimum Path Sum", difficulty: "M" }, { name: "120. Triangle", difficulty: "M" }, { name: "221. Maximal Square", difficulty: "M" }, { name: "931. Minimum Falling Path Sum", difficulty: "M" }, { name: "1277. Count Square Submatrices with All Ones", difficulty: "M" } ] },
            { name: "DP - Interval DP", problems: [ { name: "312. Burst Balloons", difficulty: "H" }, { name: "546. Remove Boxes", difficulty: "H" } ] },
            { name: "DP - Catalan Numbers", problems: [ { name: "95. Unique Binary Search Trees II", difficulty: "M" }, { name: "96. Unique Binary Search Trees", difficulty: "M" }, { name: "241. Different Ways to Add Parentheses", difficulty: "M" } ] },
            { name: "DP - Longest Increasing Subsequence (LIS)", problems: [ { name: "300. Longest Increasing Subsequence", difficulty: "M" }, { name: "354. Russian Doll Envelopes", difficulty: "H" }, { name: "1671. Minimum Number of Removals to Make Mountain Array", difficulty: "H" }, { name: "2407. Longest Increasing Subsequence II", difficulty: "H" } ] }
        ]
    },
    {
        category: "VI. Heap (Priority Queue) Patterns",
        patterns: [
            { name: "Heap - Top K Elements (Selection/Frequency)", problems: [ { name: "215. Kth Largest Element in an Array", difficulty: "M" }, { name: "347. Top K Frequent Elements", difficulty: "M" }, { name: "451. Sort Characters By Frequency", difficulty: "M" }, { name: "506. Relative Ranks", difficulty: "E" }, { name: "703. Kth Largest Element in a Stream", difficulty: "E" }, { name: "973. K Closest Points to Origin", difficulty: "M" }, { name: "1046. Last Stone Weight", difficulty: "E" }, { name: "2558. Take Gifts From the Richest Pile", difficulty: "E" } ] },
            { name: "Heap - Two Heaps for Median Finding", problems: [ { name: "295. Find Median from Data Stream", difficulty: "H" }, { name: "1825. Finding MK Average", difficulty: "H" } ] },
            { name: "Heap - K-way Merge", problems: [ { name: "23. Merge k Sorted Lists", difficulty: "H" }, { name: "373. Find K Pairs with Smallest Sums", difficulty: "M" }, { name: "378. Kth Smallest Element in a Sorted Matrix", difficulty: "M" }, { name: "632. Smallest Range Covering Elements from K Lists", difficulty: "H" } ] },
            { name: "Heap - Scheduling / Minimum Cost (Greedy with Priority Queue)", problems: [ { name: "253. Meeting Rooms II", difficulty: "M" }, { name: "767. Reorganize String", difficulty: "M" }, { name: "857. Minimum Cost to Hire K Workers", difficulty: "H" }, { name: "1642. Furthest Building You Can Reach", difficulty: "M" }, { name: "1792. Maximum Average Pass Ratio", difficulty: "H" }, { name: "1834. Single-Threaded CPU", difficulty: "M" }, { name: "1942. The Number of the Smallest Unoccupied Chair", difficulty: "M" }, { name: "2402. Meeting Rooms III", difficulty: "H" } ] }
        ]
    },
    {
        category: "VII. Backtracking Patterns",
        patterns: [
            { name: "Backtracking - Subsets (Include/Exclude)", problems: [ { name: "17. Letter Combinations of a Phone Number", difficulty: "M" }, { name: "77. Combinations", difficulty: "M" }, { name: "78. Subsets", difficulty: "M" }, { name: "90. Subsets II", difficulty: "M" } ] },
            { name: "Backtracking - Permutations", problems: [ { name: "31. Next Permutation", difficulty: "M" }, { name: "46. Permutations", difficulty: "M" }, { name: "60. Permutation Sequence", difficulty: "H" } ] },
            { name: "Backtracking - Combination Sum", problems: [ { name: "39. Combination Sum", difficulty: "M" }, { name: "40. Combination Sum II", difficulty: "M" } ] },
            { name: "Backtracking - Parentheses Generation", problems: [ { name: "22. Generate Parentheses", difficulty: "M" }, { name: "301. Remove Invalid Parentheses", difficulty: "H" } ] },
            { name: "Backtracking - Word Search / Path Finding in Grid", problems: [ { name: "79. Word Search", difficulty: "M" }, { name: "212. Word Search II", difficulty: "H" }, { name: "2018. Check if Word Can Be Placed In Crossword", difficulty: "M" } ] },
            { name: "Backtracking - N-Queens / Constraint Satisfaction", problems: [ { name: "37. Sudoku Solver", difficulty: "H" }, { name: "51. N-Queens", difficulty: "H" } ] },
            { name: "Backtracking - Palindrome Partitioning", problems: [ { name: "131. Palindrome Partitioning", difficulty: "M" } ] }
        ]
    },
    {
        category: "VIII. Greedy Patterns",
        patterns: [
            { name: "Greedy - Interval Merging/Scheduling", problems: [ { name: "56. Merge Intervals", difficulty: "M" }, { name: "57. Insert Interval", difficulty: "M" }, { name: "759. Employee Free Time", difficulty: "H" }, { name: "986. Interval List Intersections", difficulty: "M" }, { name: "2406. Divide Intervals Into Minimum Number of Groups", difficulty: "M" } ] },
            { name: "Greedy - Jump Game Reachability/Minimization", problems: [ { name: "45. Jump Game II", difficulty: "M" }, { name: "55. Jump Game", difficulty: "M" } ] },
            { name: "Greedy - Buy/Sell Stock", problems: [ { name: "121. Best Time to Buy and Sell Stock", difficulty: "E" }, { name: "122. Best Time to Buy and Sell Stock II", difficulty: "M" } ] },
            { name: "Greedy - Gas Station Circuit", problems: [ { name: "134. Gas Station", difficulty: "M" } ] },
            { name: "Greedy - Task Scheduling (Frequency Based)", problems: [ { name: "621. Task Scheduler", difficulty: "M" } ] }
        ]
    },
    {
        category: "IX. Binary Search Patterns",
        patterns: [
            { name: "Binary Search - On Sorted Array/List", problems: [ { name: "35. Search Insert Position", difficulty: "E" }, { name: "69. Sqrt(x)", difficulty: "E" }, { name: "74. Search a 2D Matrix", difficulty: "M" }, { name: "278. First Bad Version", difficulty: "E" }, { name: "374. Guess Number Higher or Lower", difficulty: "E" }, { name: "540. Single Element in a Sorted Array", difficulty: "M" }, { name: "704. Binary Search", difficulty: "E" }, { name: "1539. Kth Missing Positive Number", difficulty: "E" } ] },
            { name: "Binary Search - Find Min/Max in Rotated Sorted Array", problems: [ { name: "33. Search in Rotated Sorted Array", difficulty: "M" }, { name: "81. Search in Rotated Sorted Array II", difficulty: "M" }, { name: "153. Find Minimum in Rotated Sorted Array", difficulty: "M" }, { name: "162. Find Peak Element", difficulty: "M" }, { name: "852. Peak Index in a Mountain Array", difficulty: "M" }, { name: "1095. Find in Mountain Array", difficulty: "H" } ] },
            { name: "Binary Search - On Answer / Condition Function", problems: [ { name: "410. Split Array Largest Sum", difficulty: "H" }, { name: "774. Minimize Max Distance to Gas Station", difficulty: "H" }, { name: "875. Koko Eating Bananas", difficulty: "M" }, { name: "1011. Capacity To Ship Packages Within D Days", difficulty: "M" }, { name: "1482. Minimum Number of Days to Make m Bouquets", difficulty: "M" }, { name: "1760. Minimum Limit of Balls in a Bag", difficulty: "M" }, { name: "2064. Minimized Maximum of Products Distributed to Any Store", difficulty: "M" }, { name: "2226. Maximum Candies Allocated to K Children", difficulty: "M" } ] },
            { name: "Binary Search - Find First/Last Occurrence", problems: [ { name: "34. Find First and Last Position of Element in Sorted Array", difficulty: "M" }, { name: "658. Find K Closest Elements", difficulty: "M" } ] },
            { name: "Binary Search - Median of Two Sorted Arrays", problems: [ { name: "4. Median of Two Sorted Arrays", difficulty: "H" } ] }
        ]
    },
    {
        category: "X. Stack Patterns",
        patterns: [
            { name: "Stack - Valid Parentheses Matching", problems: [ { name: "20. Valid Parentheses", difficulty: "E" }, { name: "32. Longest Valid Parentheses", difficulty: "H" }, { name: "921. Minimum Add to Make Parentheses Valid", difficulty: "M" }, { name: "1249. Minimum Remove to Make Valid Parentheses", difficulty: "M" }, { name: "1963. Minimum Number of Swaps to Make the String Balanced", difficulty: "M" } ] },
            { name: "Stack - Monotonic Stack", problems: [ { name: "402. Remove K Digits", difficulty: "M" }, { name: "496. Next Greater Element I", difficulty: "E" }, { name: "503. Next Greater Element II", difficulty: "M" }, { name: "739. Daily Temperatures", difficulty: "M" }, { name: "901. Online Stock Span", difficulty: "M" }, { name: "907. Sum of Subarray Minimums", difficulty: "M" }, { name: "962. Maximum Width Ramp", difficulty: "M" }, { name: "1475. Final Prices With a Special Discount in a Shop", difficulty: "E" }, { name: "1673. Find the Most Competitive Subsequence", difficulty: "M" } ] },
            { name: "Stack - Expression Evaluation (RPN/Infix)", problems: [ { name: "150. Evaluate Reverse Polish Notation", difficulty: "M" }, { name: "224. Basic Calculator", difficulty: "H" }, { name: "227. Basic Calculator II", difficulty: "M" }, { name: "772. Basic Calculator III", difficulty: "H" } ] },
            { name: "Stack - Simulation / Backtracking Helper", problems: [ { name: "71. Simplify Path", difficulty: "M" }, { name: "394. Decode String", difficulty: "M" }, { name: "735. Asteroid Collision", difficulty: "M" } ] },
            { name: "Stack - Min Stack Design", problems: [ { name: "155. Min Stack", difficulty: "M" } ] },
            { name: "Stack - Largest Rectangle in Histogram", problems: [ { name: "84. Largest Rectangle in Histogram", difficulty: "H" }, { name: "85. Maximal Rectangle", difficulty: "H" } ] }
        ]
    },
    {
        category: "XI. Bit Manipulation Patterns",
        patterns: [
            { name: "Bitwise XOR - Finding Single/Missing Number", problems: [ { name: "136. Single Number", difficulty: "E" }, { name: "137. Single Number II", difficulty: "M" }, { name: "268. Missing Number", difficulty: "E" }, { name: "389. Find the Difference", difficulty: "E" } ] },
            { name: "Bitwise AND - Counting Set Bits (Hamming Weight)", problems: [ { name: "191. Number of 1 Bits", difficulty: "E" } ] },
            { name: "Bitwise DP - Counting Bits Optimization", problems: [ { name: "338. Counting Bits", difficulty: "E" } ] },
            { name: "Bitwise Operations - Power of Two/Four Check", problems: [ { name: "231. Power of Two", difficulty: "E" }, { name: "342. Power of Four", difficulty: "E" } ] }
        ]
    },
    {
        category: "XII. Linked List Manipulation Patterns",
        patterns: [
            { name: "Linked List - In-place Reversal", problems: [ { name: "83. Remove Duplicates from Sorted List", difficulty: "E" }, { name: "92. Reverse Linked List II", difficulty: "M" }, { name: "206. Reverse Linked List", difficulty: "E" }, { name: "25. Reverse Nodes in k-Group", difficulty: "H" }, { name: "234. Palindrome Linked List", difficulty: "E" }, { name: "82. Remove Duplicates from Sorted List II", difficulty: "M" } ] },
            { name: "Linked List - Merging Two Sorted Lists", problems: [ { name: "21. Merge Two Sorted Lists", difficulty: "E" } ] },
            { name: "Linked List - Addition of Numbers", problems: [ { name: "2. Add Two Numbers", difficulty: "M" }, { name: "369. Plus One Linked List", difficulty: "M" } ] },
            { name: "Linked List - Intersection Detection", problems: [ { name: "160. Intersection of Two Linked Lists", difficulty: "E" } ] },
            { name: "Linked List - Reordering / Partitioning", problems: [ { name: "24. Swap Nodes in Pairs", difficulty: "M" }, { name: "61. Rotate List", difficulty: "M" }, { name: "86. Partition List", difficulty: "M" }, { name: "143. Reorder List", difficulty: "M" }, { name: "328. Odd Even Linked List", difficulty: "M" } ] }
        ]
    },
    {
        category: "XIII. Array/Matrix Manipulation Patterns",
        patterns: [
            { name: "Array/Matrix - In-place Rotation", problems: [ { name: "48. Rotate Image", difficulty: "M" }, { name: "189. Rotate Array", difficulty: "M" } ] },
            { name: "Array/Matrix - Spiral Traversal", problems: [ { name: "54. Spiral Matrix", difficulty: "M" }, { name: "885. Spiral Matrix III", difficulty: "M" }, { name: "2326. Spiral Matrix IV", difficulty: "M" } ] },
            { name: "Array/Matrix - Set Matrix Zeroes (In-place Marking)", problems: [ { name: "73. Set Matrix Zeroes", difficulty: "M" } ] },
            { name: "Array - Product Except Self (Prefix/Suffix Products)", problems: [ { name: "238. Product of Array Except Self", difficulty: "M" } ] },
            { name: "Array - Plus One (Handling Carry)", problems: [ { name: "66. Plus One", difficulty: "E" } ] },
            { name: "Array - Merge Sorted Array (In-place from End)", problems: [ { name: "88. Merge Sorted Array", difficulty: "E" } ] },
            { name: "Array - Cyclic Sort", problems: [ { name: "41. First Missing Positive", difficulty: "H" }, { name: "268. Missing Number", difficulty: "E" }, { name: "287. Find the Duplicate Number", difficulty: "M" }, { name: "442. Find All Duplicates in an Array", difficulty: "M" }, { name: "448. Find All Numbers Disappeared in an Array", difficulty: "E" } ] },
            { name: "Array - Kadane's Variant for Maximum Product", problems: [ { name: "152. Maximum Product Subarray", difficulty: "M" } ] }
        ]
    },
    {
        category: "XIV. String Manipulation Patterns",
        patterns: [
            { name: "String - Palindrome Check (Two Pointers / Reverse)", problems: [ { name: "9. Palindrome Number", difficulty: "E" }, { name: "125. Valid Palindrome", difficulty: "E" }, { name: "680. Valid Palindrome II", difficulty: "E" } ] },
            { name: "String - Anagram Check (Frequency Count/Sort)", problems: [ { name: "49. Group Anagrams", difficulty: "M" }, { name: "242. Valid Anagram", difficulty: "E" } ] },
            { name: "String - Roman to Integer Conversion", problems: [ { name: "13. Roman to Integer", difficulty: "E" } ] },
            { name: "String - String to Integer (atoi)", problems: [ { name: "8. String to Integer (atoi)", difficulty: "M" } ] },
            { name: "String - Multiply Strings (Manual Simulation)", problems: [ { name: "43. Multiply Strings", difficulty: "M" } ] },
            { name: "String Matching - Naive / KMP / Rabin-Karp", problems: [ { name: "28. Find the Index of the First Occurrence in a String", difficulty: "E" }, { name: "214. Shortest Palindrome", difficulty: "H" }, { name: "686. Repeated String Match", difficulty: "E" }, { name: "796. Rotate String", difficulty: "E" }, { name: "3008. Find Beautiful Indices in the Given Array II", difficulty: "H" } ] },
            { name: "String - Repeated Substring Pattern Detection", problems: [ { name: "459. Repeated Substring Pattern", difficulty: "E" } ] }
        ]
    },
    {
        category: "XV. Design Patterns",
        patterns: [
            { name: "Design (General/Specific)", problems: [ { name: "146. LRU Cache", difficulty: "M" }, { name: "155. Min Stack", difficulty: "M" }, { name: "208. Implement Trie (Prefix Tree)", difficulty: "M" }, { name: "211. Design Add and Search Words Data Structure", difficulty: "M" }, { name: "225. Implement Stack using Queues", difficulty: "E" }, { name: "232. Implement Queue using Stacks", difficulty: "E" }, { name: "251. Flatten 2D Vector", difficulty: "M" }, { name: "271. Encode and Decode Strings", difficulty: "M" }, { name: "295. Find Median from Data Stream", difficulty: "H" }, { name: "341. Flatten Nested List Iterator", difficulty: "M" }, { name: "346. Moving Average from Data Stream", difficulty: "E" }, { name: "353. Design Snake Game", difficulty: "M" }, { name: "359. Logger Rate Limiter", difficulty: "E" }, { name: "362. Design Hit Counter", difficulty: "M" }, { name: "379. Design Phone Directory", difficulty: "M" }, { name: "380. Insert Delete GetRandom O(1)", difficulty: "M" }, { name: "432. All O`one Data Structure", difficulty: "H" }, { name: "460. LFU Cache", difficulty: "H" }, { name: "604. Design Compressed String Iterator", difficulty: "E" }, { name: "622. Design Circular Queue", difficulty: "M" }, { name: "641. Design Circular Deque", difficulty: "M" }, { name: "642. Design Search Autocomplete System", difficulty: "H" }, { name: "706. Design HashMap", difficulty: "E" }, { name: "715. Range Module", difficulty: "H" }, { name: "900. RLE Iterator", difficulty: "M" }, { name: "981. Time Based Key-Value Store", difficulty: "M" }, { name: "1146. Snapshot Array", difficulty: "M" }, { name: "1348. Tweet Counts Per Frequency", difficulty: "M" }, { name: "1352. Product of the Last K Numbers", difficulty: "M" }, { name: "1381. Design a Stack With Increment Operation", difficulty: "M" }, { name: "1756. Design Most Recently Used Queue", difficulty: "M" }, { name: "2013. Detect Squares", difficulty: "M" }, { name: "2034. Stock Price Fluctuation", difficulty: "M" }, { name: "2296. Design a Text Editor", difficulty: "H" }, { name: "2336. Smallest Number in Infinite Set", difficulty: "M" } ] }
        ]
    }
];
