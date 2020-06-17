# Carbon API Disbursment documentation
:warning: The API is still under development, Please contact support@carbonnn.com before using.

## API Key
:information_source: In order to get access to your API public and private key as well as a URL, Please conact support@carbonn.com.
If your key contains _test_ it's a test key and all transaction will be happenning in our sandbox.

The easiest way to test successful transaction is to pick a beneficary with country code XXX and for a failure test a country code YYY.

## Create a beneficiary
A beneficiary represents the entity that will receive the payout.

```
PUT /api/benificary
curl <URL>api/beneficiary \
  -u ck_prod_PeC39LqLyjWDarjtT1zdp7dW: \
  -d name=Jane Doe \
  -d entity_type=personnal \
  -d email=test@test.com
  -d default_curency=JPY \
  -d country_code=JPN
  -d account_number=XXXXXXXX
  -d default_payout=rakuten
```

Sample Response

```
{
    "name":"Jane Doe",
    "livemode": true,
    "beneficiary_id": "ben_WDarjtT1Xs#f3",
}

```

## Create a Payout
```
PUT /api/payout

```
curl <URL>api/payout \
    -u ck_prod_PeC39LqLyjWDarjtT1zdp7dW: \
    -d payout_method=rakuten
    -d currency=JPY
    -d amount=20
    -d note=Thanks
    -d idempotency_key=XdrEswroID
    -d beneficiary_id=ben_WDarjtT1Xs
```

Sample Response

```
{
    "payout_method":"rakuten",
    "livemode": true,
    "beneficiary_id": "ben_WDarjtT1Xs#f3",
    "amount": 20,
    "currency": JPY,
    idempotency_key: XdrEswroID,
    transaction_uuid: "e0471bd7-4318-44fd-8f09-a22e27f5e81b",
    estimated_arrival: ""

}

```

All API requests expect amounts to be provided in a currency’s smallest unit. For example, to charge 10 USD, provide an amount value of 1000 (i.e., 1000 cents).

For zero-decimal currencies, still provide amounts as an integer but without multiplying by 100. For example, to charge ¥500, provide an amount value of 500.




## Track a payout

## Setup Webhooks

Webhooks are the easiest way to get updates on the status of a payout. The initial request gives you an estimate of how long it will take for the payout to occur but webhooks will give you a real time access to the state of the payout.
Contact support@carbonnn.com to get setup with a webhook


## Idempotency
In order to make sure that you don't send duplicate payouts. We recommend sending idempotency key. The same request should get the same response. For example if you send a request to carbon for a payout and you get a timeout error, if you repeat the request with the same idempotency key, you will not trigger, the payout is stil going to be sent only once.


