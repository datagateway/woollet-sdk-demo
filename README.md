# mazda-seminar

Woollet Simple SDK (evaluation)

This SDK is a software development kit that provides Woollet Javascript SDK for API connectivity, to perform user creation, verfiable credential, web3 token and other Woollet features evaluation

availablity not gaurantee 

## Getting Started

To start using in your project, follow these steps:

1. Clone the repository: `git clone https://github.com/datagateway/woollet-sdk-demo.git` 
2. Include the CDN in your project `https://cdn.woollet.net/woollet.min.js`
3. Ensure you have the required dependencies (node.js 18.16.0+).

## Usage and Examples

Demo key: `8aae25baff2ef9e3da0ac9ff82467823`


MySDK offers a wide range of features that you can leverage in your projects. Here's an example of how to use the SDK to perform a basic task:


# Initialize the SDK
```javascript
import { Woollet } from "https://cdn.woollet.net/woollet.min.js"

const woollet = new Woollet("DEMO_KEY")

```

## API Reference

The following section provides an overview of the available API endpoints and their functionalities.

------------------------------------------------------------------------------------------


## System 

###  Status

<details>
 <summary>  <code>woollet.System.status()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  None | N/A   | N/A  |

</details>

------------------------------------------------------------------------------------------

## User

### Sign up

<details>
 <summary>  <code> woollet.User.signup()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | email      |  required | string   | Email address |
> | pass     |  required | string   | Password  |
> | name      |  required | string   | Must be >=6 characters  |
> | role      |  required | string   | must be >=4 characters |
> | card      |  optional | string   | card number |

</details>



### Sign in

<details>
 <summary>  <code> woollet.User.signup()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | email      |  required | string   | Email address |
> | pass     |  required | string   | Password  |

</details>



### Profile

<details>
 <summary>  <code> woollet.User.profile()</code></summary>


##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  None | N/A   | N/A  |

</details>

------------------------------------------------------------------------------------------

## VC

### Load

<details>
 <summary>  <code> woollet.Wallet.creds()</code></summary>


##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  None | N/A   | N/A  |

</details>


### Request

<details>
 <summary>  <code> woollet.Proof.request()</code></summary>


##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | did      |  required | string   | The target wallet of requesting |

</details>


### List

<details>
 <summary>  <code>woollet.Wallet.proofs()</code></summary>


##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  None | N/A   | N/A  |

</details>

### Result

<details>
 <summary>  <code>woollet.Proof.result()</code></summary>


##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | peid      |  required | string   | Proof exchange ID |

</details>

------------------------------------------------------------------------------------------

## Connecetion

### List

<details>
 <summary>  <code>woollet.Conn.list()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  None | N/A   | N/A  |

</details>

### Get

<details>
 <summary>  <code>woollet.Conn.get()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | cid      |  required | string   | Connection ID |

</details>

------------------------------------------------------------------------------------------

## Token

### Balance
<details>
 <summary>  <code>woollet.Eth.balance()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  None | N/A   | N/A  |

</details>

### Faucet

<details>
 <summary>  <code>woollet.Eth.faucet()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | cid      |  required | string   | Connection ID |

</details>

------------------------------------------------------------------------------------------

## NFT

### SBY Balance
<details>
 <summary>  <code>woollet.Eth.sbyBal()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  None | N/A   | N/A  |

</details>

### SBY Faucet

<details>
 <summary>  <code>woollet.Eth.sbyFaucet()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | cid      |  required | string   | Connection ID |

</details>

### Mint

<details>
 <summary>  <code>woollet.NFT.mint()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | img      |  required | string   | image URL |

</details>

### View

<details>
 <summary>  <code>woollet.NFT.browser()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  None | N/A   | N/A  |

</details>

### Transfter

<details>
 <summary>  <code>woollet.NFT.transfer()</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | target      |  required | string   | The address of other party |
> | tokenID      |  required | string   | The token ID you would like to transfer |

</details>
