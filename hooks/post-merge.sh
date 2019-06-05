#!/usr/bin/env bash
# MIT © Sindre Sorhus - sindresorhus.com

# git hook to run a command after `git pull` if a specified file was changed
# Run `chmod +x post-merge` to make it executable then put it into `.git/hooks/`.

changed_files="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"

check_run() {
    if echo "$changed_files" | grep -q "$1"; then
        echo "Found diff in $1"
        eval "$2"
    else
        echo "Not found any diff in $1"
    fi
}

# run `yarn` if package.json changed
check_run package.json "yarn"
