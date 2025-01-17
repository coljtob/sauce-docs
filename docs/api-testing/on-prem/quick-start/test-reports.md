---
id: test-reports
title: API Testing Reports
sidebar_label: Test Reports
description: "Primer on API Fortress Test Reports. Includes items like session details, timestamp, downloader, test execution general details: test name, test status, company, project, request component, etc."
---

<head>
  <meta name="robots" content="noindex" />
</head>

>**Legacy Documentation**<br/>You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see [API Testing on the Sauce Labs Cloud](/api-testing/).

import useBaseUrl from '@docusaurus/useBaseUrl';

Here's a quick primer on API Fortress Test Reports:

<img src={useBaseUrl('img/api-fortress/2018/12/report.png')} alt="Test Report Primer Image"/>

1. Session Details - Metadata about the execution of the test; Timestamp, downloader, type of execution
2. General Details - Test name, test status, company, project
3. A Request Component - Click "See More" to reveal the Request Details pane
4. An Assertion - A gray dot indicates a pass, a red dot indicates a fail, and a yellow dot indicates a warning.
5. Request Details - REST method, URL, Request Headers
6. Response Details - Response Headers, Status Code
7. Response Body - The response payload itself
