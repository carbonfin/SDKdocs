# Carbon API Disbursment documentation
:warning: The API is still in closed beta, Please contact support@carbonpayment.io before using.

## API Key
In order to get access to your API public and private key as well as a URL, Please conact support@carbonpayment.io.
If your key contains _test_ it's a test key and all transaction will be happenning in our sandbox.

The easiest way to test successful transaction is to pick a beneficary with country code XXX and for a failure test a country code YYY.

## Create a beneficiary
A beneficiary represents the entity that will receive the payout.

```
POST /v1/benificary
curl --location --request POST 'localhost:3000/v1/beneficiary' \
--user 'sk_test-43528c71-f5d1-4426-8005-a6a1209d354c'
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--data-raw '{
    "beneficiary": {
        "name": "John Doe",
        "entity_type": "business",
        "email": "john@doe.com",
        "country_code": "US"
    }
}'
```

Sample Response

```
{
    "id": "8663bac3-cfda-4a48-8092-9deeedde410c",
    "name": "John Doe",
    "entity_type": "business",
    "email": "john@doe.com",
    "phone_number": null,
    "country_code": "US",
    "verified": false,
    "access_token_id": "ad30efff-15b1-43c3-95c0-61156d0c7ac9",
    "livemode": false
}

```

## Create a Payout
```
POST /v1/payout

```
```
curl --location --request POST 'localhost:3000/v1/payout' \
--user 'sk_test-43528c71-f5d1-4426-8005-a6a1209d354c'
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payout": {
        "amount": 2000,
        "currency": "USD",
        "note": "Thanks for your help!",
        "beneficiary_id": "8663bac3-cfda-4a48-8092-9deeedde410c",
        "idempotency_key": "mlkrewfhwlqoiDOewm34"
    }
}'
```

Sample Response

```
{
    "id": "484752de-4b47-4435-8140-29c493f44732",
    "amount": 20,
    "currency": "USD",
    "note": "Thanks for your help!",
    "idempotency_key": null,
    "beneficiary_id": "8663bac3-cfda-4a48-8092-9deeedde410c",
    "livemode": false
}

```

All API requests expect amounts to be provided in a currency’s smallest unit. For example, to charge 10 USD, provide an amount value of 1000 (i.e., 1000 cents).

For zero-decimal currencies, still provide amounts as an integer but without multiplying by 100. For example, to charge ¥500, provide an amount value of 500.




## Track a payout

## Setup Webhooks

Webhooks are the easiest way to get updates on the status of a payout. The initial request gives you an estimate of how long it will take for the payout to occur but webhooks will give you a real time access to the state of the payout.
Contact support@carbonpayment.io to get setup with a webhook


## Idempotency
In order to make sure that you don't send duplicate payouts. We recommend sending idempotency key. The same request should get the same response. For example if you send a request to carbon for a payout and you get a timeout error, if you repeat the request with the same idempotency key, you will not trigger, the pay out will be send only once.


