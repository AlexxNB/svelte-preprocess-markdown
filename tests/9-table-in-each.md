| Name   | Gender | Breed                      |
| ------ | :----: | -------------------------- |
| Dasher |  male  | Whippet                    |
| Maisey | female | Treeing Walker Coonhound   |


| Name | Gender | Breed |
| ---- | :----: | ----- |
{#each dogs as {name, gender, breed}}
| {name} | {gender} | {breed} |
{:else}
No entries
{/each}


| Name | Gender | Breed |
| ---- | ---- | ----- |
{#each dogs as {name, gender, breed}}
| {name} | {gender || 'undefined'} | {breed} |
| {name} | {gender} | {breed} |
{/each}


| Name | Gender | Breed |
| ---- | :----: | ----- |
{#each dogs as {name, gender, breed}}

| {name} | {gender || 'undefined'} | {breed} |

{/each}
