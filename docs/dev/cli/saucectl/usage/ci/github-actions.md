---
id: github-actions
title: saucectl with GitHub Actions
sidebar_label: GitHub Actions
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

These examples can apply to virtually any GitHub deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository.

## What You'll Need

* A Sauce Labs account ([Log in](https://accounts.saucelabs.com/am/XUI/#login/) or sign up for a [free trial license](https://saucelabs.com/sign-up))
* Your Sauce Labs [Username and Access Key](https://app.saucelabs.com/user-settings)
* A [GitHub Account](https://github.com/join)
* The following permissions in GitHub:
    * ability to create and manage workflows
    * ability to create and store [GitHub secrets](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets)

## Create GitHub Secrets

The first order of business is to export your [Sauce Labs account credentials](https://app.saucelabs.com/user-settings) and store them as GitHub Secrets.

1. Navigate to your project repository and select the __settings__ icon.

    <img src={useBaseUrl('img/stt/github-settings.png')} alt="GitHub Settings" width="500" />

2. Select __Secrets__.
3. Click the __New secret__ button.
4. Add the following:
    * Name: `SAUCE_USERNAME`
    * Value: 'your-sauce-username'
5. Click __Add secret__ to finish.
6. Repeat the same steps above for your `SAUCE_ACCESS_KEY`.

## Configure the GitHub Action

In your root project directory, create the following directory tree: `.github/workflows`. In the `workflows` directory create a file called `actions.yml`.

Add the following to the top of your file:

:::note
Setting `env` at the top of the file enables it globally in this workflow, so all jobs have access to these variables.
:::

```yaml reference
https://github.com/saucelabs/saucectl-cypress-example/blob/main/.github/workflows/test-v1.yml#L3-L13
```

## Create the Test Job

In the examples below, we illustrate the two different `saucectl` run modes, which will determine where your tests will execute:
* __Docker mode__ refers to executing tests locally in a container
* __Sauce Cloud mode__ refers to executing tests on Sauce Cloud (i.e., Sauce Labs infrastructure)
  * If you're testing on the Sauce Cloud, you will likely require a tunnel back to where your app is running. A tunnel enables the remote browser to access your local network. For this, you'll need to use [Sauce Connect](/secure-connections/sauce-connect).

:::note
For more detailed information on setting event-driven actions and jobs, please visit the [GitHub Action documentation](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#the-components-of-github-actions).
:::

<Tabs
  defaultValue="Docker"
  values={[
    {label: 'Docker', value: 'Docker'},
    {label: 'Sauce Cloud', value: 'Sauce Cloud'},
  ]}>

<TabItem value="Docker">

```yaml reference
https://github.com/saucelabs/saucectl-cypress-example/blob/main/.github/workflows/test-v1.yml#L21-L25
```

</TabItem>
<TabItem value="Sauce Cloud">

```yaml reference
https://github.com/saucelabs/saucectl-cypress-example/blob/main/.github/workflows/test-v1.yml#L27-L31
```

</TabItem>
</Tabs>

:::note
You can reference our example workflows [here](https://github.com/saucelabs/saucectl-cypress-example/tree/main/.github/workflows).
:::

Now when you commit these files, GitHub will detect the new workflow actions and launch `saucectl` to run your tests.

To see the output:

1. Log in to GitHub.
2. Navigate to your repository page.
3. Click on **Actions**.

    <img src={useBaseUrl('img/stt/github-actions.png')} alt="GitHub Actions" width="500" />

Your output may look something like this:

<img src={useBaseUrl('img/stt/github-workflow.png')} alt="GitHub Workflow" width="800" />
