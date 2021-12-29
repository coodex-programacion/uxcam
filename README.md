# uxcam

UXCam support for Capacitor 3

## Install

```bash
npm install uxcam
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`logEvent(...)`](#logevent)
* [`startWithKey(...)`](#startwithkey)
* [`setUserIdentity(...)`](#setuseridentity)
* [`setUserProperty(...)`](#setuserproperty)
* [`setMultiSessionRecord(...)`](#setmultisessionrecord)
* [`getEnabledMultiSessionRecord()`](#getenabledmultisessionrecord)
* [`tagScreenName(...)`](#tagscreenname)
* [`setAutomaticScreenNameTagging(...)`](#setautomaticscreennametagging)
* [`stopSession()`](#stopsession)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### logEvent(...)

```typescript
logEvent(options: LogEventProperty) => Promise<void>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#logeventproperty">LogEventProperty</a></code> |

--------------------


### startWithKey(...)

```typescript
startWithKey(options: { UXCamKey: string; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ UXCamKey: string; }</code> |

--------------------


### setUserIdentity(...)

```typescript
setUserIdentity(options: { userIdentity: string; }) => Promise<void>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ userIdentity: string; }</code> |

--------------------


### setUserProperty(...)

```typescript
setUserProperty(options: UserProperty) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#userproperty">UserProperty</a></code> |

--------------------


### setMultiSessionRecord(...)

```typescript
setMultiSessionRecord(options: { recordMultipleSessions: boolean; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ recordMultipleSessions: boolean; }</code> |

--------------------


### getEnabledMultiSessionRecord()

```typescript
getEnabledMultiSessionRecord() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### tagScreenName(...)

```typescript
tagScreenName(options: { screenName: string; }) => Promise<void>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ screenName: string; }</code> |

--------------------


### setAutomaticScreenNameTagging(...)

```typescript
setAutomaticScreenNameTagging(options: { enable: boolean; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ enable: boolean; }</code> |

--------------------


### stopSession()

```typescript
stopSession() => Promise<void>
```

--------------------


### Interfaces


#### LogEventProperty

| Prop             | Type                                              |
| ---------------- | ------------------------------------------------- |
| **`eventName`**  | <code>string</code>                               |
| **`properties`** | <code>{ [key: string]: string \| number; }</code> |


#### UserProperty

| Prop             | Type                                              |
| ---------------- | ------------------------------------------------- |
| **`properties`** | <code>{ [key: string]: string \| number; }</code> |

</docgen-api>
