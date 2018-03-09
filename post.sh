curl --user admin:Ff2SYr9oYLni --request POST --header "Accept:application/json" --header "Content-Type:application/json" --data \
"{'grade':'A','name':'hydrochloric acid','puritylevel':'.5'}" \
https://dev17581.service-now.com/api/now/table/x_197846_team_nan_reagent -s | jq -r
