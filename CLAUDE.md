# louisrotellini-portfolio

## Stop rule

When a step doesn't need my input, keep going. Stop and hand back when you reach the review-pass limit set in the task, when you can't continue without me, or before anything destructive: deleting data, merging or pushing your own work to a shared branch, or changing anything outside this repository.

These limits bind the session that implements a change: a local session leaves its diff in the worktree, a cloud session pushes only to its own working branch. The separate session that verifies the change commits, pushes and merges once the exit checks pass.
