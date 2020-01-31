# git-bisect-demo

If you want to demonstrate quickly what git bisect is to your team, feel free to use/modify and do whatever you want with this project.

Feel free to have a look at my [starterkit](https://github.com/thomas-lg/react-webpack-starterkit.git) while you're here :innocent:. I used it for this project.

## Get it

As usual

```bash
git clone https://github.com/thomas-lg/git-bisect-demo
cd git-bisect-demo
npm i
npm start
```

## Do it

Now that you got the project running, you'll see that the last slide seems to be buggy and that's alright. Your mission is to find the guilty commit :smile:.

To do it we're gonna use `git bisect`. It's a very simple and usefull tool that allow you to spot the commit that introduce a bug in your codebase.

## How to

You must be the guy doing the demo so here is some spoils for you.

![alt text][branch]

See that looking for me? That's the commit that introduce the bug so now question is how to use git bisect to spot it ez and pz.

I do know that the the v1.0 was working perfectly (You can check by yourself 😉). That means that the issue was introduced between the v1.0 commit tag and my current version.

The help command is pretty usefull to understand how it works.

![alt text][git_command]

Here we only have to use a few of them.


## Author

Thomas Le Gougaud [@thomas-lg](https://github.com/thomas-lg)

[branch]: ./readme/vert_bisect.png
[git_command]: ./readme/bisect_cmd.png
[bisect_begin]: ./readme/bisect_begin.png
