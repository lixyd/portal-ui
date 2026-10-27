# portal-ui

给个人项目主页用的 agent skill。一页里有好几件自己的作品时用它。只有一个卖点、一个按钮的落地页不用它。

视觉上的套路禁令来自 [taste-skill](https://github.com/Leonxlnx/taste-skill)。字号节奏、焦点和动效时间来自 [ai-design-skills](https://github.com/elayadesign/ai-design-skills) 的 `landing-page-design`。两边冲突时，以本仓库的 `SKILL.md` 为准。

## 安装

Claude Code、Grok、Codex 这类会读 `SKILL.md` 的工具，把本仓库的 `SKILL.md` 拷进对应的 skills 目录，目录名用 `portal-ui`。

## 自检

```bash
node scripts/check.mjs path/to/index.html path/to/site.css path/to/home.css
```

脚本会失败的情况：导航被 `display:none` 却没有菜单按钮、标题写了博客但页面没有博客、缺 `h1`、导航锚点没有目标。

MIT。
