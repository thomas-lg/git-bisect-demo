# git-bisect-demo

If you want to demonstrate quickly what git bisect is to your team, feel free to use/modify and do whatever you want with this project. Slides are a bit raw, this project was also a pretext to play with react ;).

## Dive into it

What is `git bisect`? To make it short, quick story!

You found a bug just before a release but got no idea where this bug come from. There are 500 commits to check and you are beginning to lose your mind ...

Guess what ... `git bisect` will allow you to find the commit that cause the issue by checking maximum 10 commits. The process is automatic, fast, secure and best of all it **works**.

## Get it

As usual

```bash
git clone https://github.com/thomas-lg/git-bisect-demo
cd git-bisect-demo
npm i
npm start
```

## Understand it

You must be the person doing the demo or training so here is some explanation about how it works.

![alt text][branch]

See that red arrow? That's the commit that introduce a bug in this fake commit history. Question is how to use `git bisect` to spot it ez and pz.

I do know that the the v1.0 was working perfectly. That means that the issue was introduced between the v1.0 commit tag and my current version. Hopefully `git bisect` is our ally!

So what's happening here!

1. `git bisect` after initialisation is going to choose the median commit between master and tag v1.0: `7234dfergf....`.
2. Now we have to check if this commit is buggy or no. The rule is:
   1. Bug is present then `git bisect bad`
   2. Bug is not present then `git bisect good`
3. In this case commit `7234dfergf....` has no bug so we input `git bisect good`. If this commit does not have the bug that means that the bug is between this commit and master! So `git bisect` will automatically fetch the commit median between master and this commit
4. Now we have to check if this commit is buggy or no. (Back to 2)
5. And I guess that make sense now.

At the end git bisect will be able to pin point the faulty commit in no time with a minimum of operation.

Check the help command of `git bisect` by yourself, it's pretty easy to understand what each command is doing.

In this demo case we're only going to use a few of them.

## Step by step

Make sure that you are on the last commit of the project and then begin the show!

1. `npm start` To run the project then go throught the slides and reach the last one if you're not already on it.
2. Open a new terminal and `git bisect start` You'll noticed that a `(master|BISECTING)` appeared next to your command line. If it's not obvious enough that just mean that you enter the bisect mode of git 😜.
3. `git bisect bad` Because you know that the current commit has the bug.
4. `git bisect good v1.0` Because you know that v1.0 has **NO** bug on the last slide(You can check by yourself 😉). The estimated steps required to find the faulty commit should be display, in my case it's roughly 4 steps. This command line should also fetch a new commit.
5. If you stayed on the last slide you'll see than it must have been updated. Now your work is simply to say if yes or no the current commit is buggy.
   1. If this new gif does not seem alright just `git bisect bad` (meaning if it's the car, umbrella or desk).
   2. If it's fine then `git bisect good` (meaning if it's a minions).
   3. Redo untill you find the bad boy.
6. Finally you should find the `lookingforme!` commit that started everything.
7. You can now `git bisect reset` to go back to `HEAD`.
8. Well done 🎉🎊!

What to do now? Just check the files that have been updated in the `lookingforme!` commit and you should find what's wrong! Not that useful in this demo but real life might be different 😋.

## What's more

[git bisect](https://git-scm.com/docs/git-bisect) doc is pretty nice, you should definitely check some others subcommand. Nicest one must be `git bisect run <cmd>` that will allow you to use a script instead of manually saying if a specific commit is **good** or **bad**

Ad for myself: Have a look at my [starterkit](https://github.com/thomas-lg/react-webpack-starterkit.git) if you like React/Webpack/etc. I used it for this project 😅.

## Author

Thomas Le Gougaud [@thomas-lg](https://github.com/thomas-lg)

## Todo

- make prod bundle work
- make slide prettier
- testing

[branch]: ./readme/vert_bisect.png
[git_command]: ./readme/bisect_cmd.png
[bisect_begin]: ./readme/bisect_begin.png
