import { Woollet } from "https://cdn.woollet.net/woollet.min.js"

const woollet = new Woollet('8aae25baff2ef9e3da0ac9ff82467823');

//========== System status ==========//
const systemBtn = document.getElementById('system-btn');
const systemOP = document.getElementById('system-op');

systemBtn.addEventListener('click', () => {
  woollet.System.status().then((r) => {
    console.log(r.data);
    systemOP.innerHTML = JSON.stringify(r, null, 4);
  });
});

//========== Wallet create ==========//

//--- Sign up wallet ---//

const signupBtn = document.getElementById('signup-btn');
const signupOP = document.getElementById('signup-op');

// Define Sign up Function
const signup = (email, pass, name, card, role) => {
  woollet.User.signup(email, pass, name, card, role).then((r) => {
    console.log(r.data);
    signupOP.innerHTML = JSON.stringify(r, null, 4);

    // Save wallet info to sessionStorage
    sessionStorage.setItem('token', r.data.access_token);
  });
};

signupBtn.addEventListener('click', () => {
  const email = document.getElementById('signup-email').value;
  const pass = document.getElementById('signup-pass').value;
  const name = document.getElementById('signup-name').value;
  const card = document.getElementById('signup-card').value;
  const role = document.getElementById('signup-role').value;

  signup(email, pass, name, card, role);
});


//--- Sign in Wallet ---//

const signinBtn = document.getElementById('signin-btn');
const signinOP = document.getElementById('signin-op');

// Define Sign in Function
const signin = (email, pass) => {
  woollet.User.signin(email, pass).then((r) => {
    console.log(r);
    signinOP.innerHTML = JSON.stringify(r, null, 4);

    // Save wallet info to sessionStorage
    sessionStorage.setItem('token', r.access_token);
  });
};

signinBtn.addEventListener('click', () => {
  const email = document.getElementById('signin-email').value;
  const pass = document.getElementById('signin-pass').value;

  signin(email, pass);
});


//--- Get Wallet ID ---//
const didBtn = document.getElementById('did-btn');
const didOP = document.getElementById('did-op');

didBtn.addEventListener('click', () => {
  const did = woollet.User.did();
  console.log(did);
  didOP.innerHTML = did;

  // Save wallet ID  to sessionStorage
  sessionStorage.setItem('did', did);
});


//--- Profile ---//

const profileBtn = document.getElementById('profile-btn');
const profileOP = document.getElementById('profile-op');

const checkProfile = () => {
  woollet.User.profile().then((r) => {
    console.log(r);
    profileOP.innerHTML = JSON.stringify(r, null, 4);

    // save ETH address
    const eid = r.data.eth_id;
    sessionStorage.setItem('eth_id', eid);
  });
};

profileBtn.addEventListener('click', checkProfile);


//========== VC ==========//


//--- Load VC ---//
const loadvcBtn = document.getElementById('load-vc-btn');
const loadvcOP = document.getElementById('load-vc-op');

const loadVC = () => {
  woollet.Wallet.creds().then((r) => {
    console.log(r);
    loadvcOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

loadvcBtn.addEventListener('click', loadVC);

//--- VC Request ---//
const requestBtn = document.getElementById('vc-request-btn');
const requestOP = document.getElementById('request-op');

const requestVC = (did) => {
  woollet.Proof.request(did).then((r) => {
    console.log(r);
    requestOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

requestBtn.addEventListener('click', () => {
  const did = document.getElementById('request-did').value;
  requestVC(did);
});

//--- Proof List ---//
const proofListBtn = document.getElementById('proof-list-btn');
const proofListOP = document.getElementById('proof-list-op');

const proofList = () => {
  woollet.Wallet.proofs().then((r) => {
    console.log(r);
    proofListOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

proofListBtn.addEventListener('click', proofList);

//--- VC Result ---//
const resultBtn = document.getElementById('vc-result-btn');
const resultOP = document.getElementById('vc-result-op');

const resultVC = (peid) => {
  woollet.Proof.result(peid).then((r) => {
    console.log(r);
    resultOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

resultBtn.addEventListener('click', () => {
  const peid = document.getElementById('peid-result').value;
  resultVC(peid);
});


//========= Connection =========//

//--- Connection List ---//
const connBtn = document.getElementById('conn-list-btn');
const connListOP = document.getElementById('conn-list-op');

const connList = () => {
  woollet.Conn.list().then((r) => {
    console.log(r);
    connListOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

connBtn.addEventListener('click', connList);

//--- Connection Get ---//

//1f05ef3f-c78d-4d1b-8706-edf7f3ad2f27

const connGetBtn = document.getElementById('conn-get-btn');
const connGetOP = document.getElementById('conn-get-op');

const connGet = (cid) => {
  woollet.Conn.get(cid).then((r) => {
    console.log(r);
    connGetOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

connGetBtn.addEventListener('click', () => {
  const did = document.getElementById('conn-id').value;
  connGet(did);
});


//========= TOKEN =========//

//--- Check Balace ---//
const checkBalBtn = document.getElementById('eth-bal-btn');
const checkBalOP = document.getElementById('eth-bal-op');

const checkBal = () => {
  woollet.Eth.balance().then((r) => {
    console.log(r);
    checkBalOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

checkBalBtn.addEventListener('click', checkBal);


//--- Faucet ---//
const faucetBtn = document.getElementById('faucet-btn');
const faucetOP = document.getElementById('faucet-op');

const faucet = () => {
  woollet.Eth.faucet().then((r) => {
    console.log(r);
    faucetOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

faucetBtn.addEventListener('click', faucet);


//========= NFT =========//

//--- SBY Balance ---//
const sbyBalBtn = document.getElementById('sby-bal-btn');
const sbyBalOP = document.getElementById('sby-bal-op');

const sbyBal = () => {
  woollet.Eth.sbyBal().then((r) => {
    console.log(r);
    sbyBalOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

sbyBalBtn.addEventListener('click', sbyBal);

//--- SBY Faucet---//
const sbyBtn = document.getElementById('sby-btn');
const sbyOP = document.getElementById('sby-op');

const sbyFauect = () => {
  woollet.Eth.sbyFaucet().then((r) => {
    console.log(r);
    sbyOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

sbyBtn.addEventListener('click', sbyFauect);

//--- Mint ---//
const mintBtn = document.getElementById('nft-mint-btn');
const mintOP = document.getElementById('nft-mint-op');

const mint = (img) => {
  woollet.NFT.mint(img).then((r) => {
    console.log(r);
    mintOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

mintBtn.addEventListener('click', () => {
  const img = document.getElementById('nft-img').value;

  mint(img);
});

//--- View ---//
const browserBtn = document.getElementById('nft-browser-btn');
const browserOP = document.getElementById('nft-browser-op');

const viewNFT = () => {
  woollet.NFT.browser().then((r) => {
    console.log(r);
    browserOP.innerHTML = JSON.stringify(r, null, 4);
  });
};

browserBtn.addEventListener('click', viewNFT);

//--- transfter ---//
const transferBtn = document.getElementById('nft-trans-btn');
const transferOP = document.getElementById('nft-trans-op');

const nftTransfer = (target, tokenID) => {
  woollet.NFT.transfer(target, tokenID).then((r) => {
    console.log(r);
    transferOP.innerHTML = JSON.stringify(r, null, 4);
  });
};
transferBtn.addEventListener('click', () => {
  const target = document.getElementById('target-wallet').value;
  const tokenID = document.getElementById('nft-token-id').value;

  const tokenNum = Number(tokenID);

  nftTransfer(target, tokenNum);
});

