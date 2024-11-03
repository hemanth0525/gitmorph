export const gitCommands = [
    {
        git: 'git init',
        gitmorph: 'gm init'
    },
    {
        git: 'git add <file>',
        gitmorph: 'gm stage <file>'
    },
    {
        git: 'git commit -m "<message>"',
        gitmorph: 'gm save "<message>"'
    },
    {
        git: 'git push',
        gitmorph: 'gm upload'
    },
    {
        git: 'git pull',
        gitmorph: 'gm download'
    },
    {
        git: 'git branch <name>',
        gitmorph: 'gm branch <name>'
    },
    {
        git: 'git checkout <branch>',
        gitmorph: 'gm switch <branch>'
    }
];