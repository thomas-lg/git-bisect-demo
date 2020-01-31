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

To do it we're gonna use `git bisect`. It's a very simple and useful tool that allow you to spot the commit that introduce a bug in your codebase.

## How to

You must be the guy doing the demo or just training so here is some spoils for you.

![alt text][branch]

See that red arrow? That's the commit that introduce the bug so now question is how to use git bisect to spot it ez and pz.

I do know that the the v1.0 was working perfectly (You can check by yourself 😉). That means that the issue was introduced between the v1.0 commit tag and my current version. Hopefully `git bisect` is our ally!

Check the help command of `git bisect` by yourself, it's pretty easy to get what each command is doing.

In this demo case we're only gonna use a few of them.

## Step by step

Make sure that you are on the last commit of the project and then begin the show!

1. `npm start` To run the project then go throught the slides and reach the last one if you're not already on it.
2. Open a new terminal and `git bisect start` You'll noticed that a `(master|BISECTING)` appeared next to your command line. If it's not obvious enough that just mean that you enter the bisect mode of git.
3. `git bisect bad` Because you know that the current commit has the bug.
4. `git bisect good v1.0` Because you know that v1.0 has **NO** bug. It should display the estimated steps required to find the faulty commit, in my case it's roughly 3 steps. This command line should also fetch a new commit for you to check.
5. If you stayed on the last slide you'll see than it must have been updated. Now your work is simply to say if yes or no the current commit is buggy.
   1. If this new gif does not seem alright just `git bisect bad`
   2. If it's fine `git bisect good`.
6. Finally you should find the `lookingforme!` commit that started everything.
7. You can now `git bisect reset` to go back to `HEAD`

What to do know? Just check the files that have been updated in the `lookingforme!` commit and you should find what's wrong! Not that useful in this demo but real life might be different 😋

## What's more

[git bisect](https://git-scm.com/docs/git-bisect) doc is pretty nice, you should definitely check some others subcommand. Nicest one must be `git bisect run <cmd>` that will allow you to use a script instead of manually saying if a specific commit is **good** or **bad**

## Author

Thomas Le Gougaud [@thomas-lg](https://github.com/thomas-lg)

[branch]: ./readme/vert_bisect.png
[git_command]: ./readme/bisect_cmd.png
[bisect_begin]: ./readme/bisect_begin.png
