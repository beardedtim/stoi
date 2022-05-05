# stoi

> Temporal Workflow Exploration

## Usage

```sh
# You will need a temporal server up
#
#
npm i
# run both in one terminal
# can also do npm run dev.processor
# or npm run dev.server individually
npm run dev

# Hit the service at process.env.PORT || 5000
curl -X post localhost:5000/tasks

# alot of output but some workflow id

curl localhost:5000/tasks/:workflow-id

# same output of workflow but with different status

curl -X POST localhost:5000/tasks/:workflow-id/cancel

# same output of workflow but now it's cancelled
# we can validate that by calling
curl localhost:5000/tasks/:workflow-id

# and see the status is CANCELLED
```
