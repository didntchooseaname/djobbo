export ZSH=~/.oh-my-zsh

# Theme
ZSH_THEME="aki"
AKI_PATH="~/.aki"

# Config
HYPHEN_INSENSITIVE="true"
DISABLE_UPDATE_PROMPT="true"
DISABLE_UNTRACKED_FILES_DIRTY="true"

# Aliases
alias c="clear"
alias aki="cd $AKI_PATH"

# Functions
$ ld() { cd "$@" && ls --color=auto; }
$ ga() { git add "$@"; }
$ gs() { git status; }
$ gc() { git commit "$@"; }
$ gp() { git push; }

# Source
source $ZSH/oh-my-zsh.sh
