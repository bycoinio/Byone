const cn = {
  home:{
    welcome:"欢迎使用",
    byone:" Byone 钱包",
    create:"创建钱包",
    createHint:"创建一个新的钱包来存储和交易您的 BTM 及侧链代币",
    import:"导入钱包",
    importHint:"如果您在其它网站或 App 上创建过钱包，可以在这里导入"
  },
  common:{
    veto: '取消投票',
    cross_chain_in: '跨入Vapor',
    spend : '花费',
    coinbase: 'Coinbase',
    control : '接受',
    cross_chain_out: '跨出Vapor',
    vote: '投票',
    transfer:'转账',
    issue:'资产发行',
    retire:'资产销毁',
    transfer_in:'收款',
    transfer_out:'转账',
    cross_chain:'跨链',
    confirm: '确认',
    cancel: '取消'
  },
  welcome: {
    enterMain:'进入主界面',
    title: '欢迎使用BYTOM精简Chrome钱包',
    use: '开始',
    terms: '使用条款',
    confirm: '确认',
    cancel: '取消',
    register: '注册',
    restore: '恢复',
    term1:'我同意',
    term2:'使用条款'
  },
  restore:{
    title:'导入钱包',
    mnemonic:'助记词',
    mHint:'请按顺序输入助记词，单词中间用空格隔开',
    kFile:'Keystore 文件',
    kFHint:'备份上传',
    kText:'Keystore 纯文本',
    kSHint:'请输入完整的 Keystore 纯文本',
    sPassword:'设置密码',
    vPassword:'验证密码',
    passwordHint:'请牢记密码，交易、备份等操作需要验证密码！',
    p1text:'请设置密码',
    p2text:'请重复输入密码'
  },
  dialog: {
    header: '提示',
    copy: {
      success: '复制成功',
      fail: '复制失败'
    }
  },
  transfer: {
    address: '接收地址',
    bytomAddress:'主链地址(bm开头）',
    vaporAddress:'侧链地址(vp开头）',
    quantity: '数量',
    fee: '手续费',
    available:'可用',
    feeType: '标准',
    send: '发送交易',
    confirmPassword: '密码',
    confirm: '提交',
    cancel: '取消',
    emptyPassword: '密码不能为空',
    unit: '单位',
    asset:'选择资产',
    assetId:'资产Id',
    emptyTo: '地址不能为空',
    noneBTM: '错误的BTM数量',
    transferAmount: '转账金额',
    transferCost: '当前价值',
    total: '总计',
    confirmTransaction:'交易确认',
    totalTip: '转账金额+矿工费用',
    success: '交易发送成功',
    from:'发送账户',
    to:'接收地址',
    view:'展开',
    hide:'隐藏',
    viewAll:'展示全部',
    hideAll:'隐藏全部',
    types:'交易类型',
    password:'请输入密码',
    detail:'交易详情',
    requestDetail:'请求详情',
    amount:'交易金额',
    signComfirm:' 签名交易',
    signMessage:' 签名信息'
  },
  listAsset: {
    all:'全部',
    fail:'失败'
  },
  crossChain:{
    title:'跨链',
    detail:'跨链详情',
    amountPlaceHolder:"链可用",
    amountHint:'跨链交易预计24小时内完成',
    toVapor:'转入\nVapor链',
    toBytom:'转出至\nBytom链',
    asset:'选择资产',
    direction:'跨链方向'
  },
  listVote:{
    title:'节点投票',
    myVote:'我的投票',
    totalVote:'全网投票',
    voteRecord:'投票记录',
    voteRules:'投票规则',
    cancelVote:'取消投票',
    bp:'正式共识节点',
    standbyBP:'备选共识节点',
    bpName:'节点名称',
    bpPubkey:'节点公钥',
    vote:'投票',
    votes:'票数',
    voteVotes:'投票票数',
    voteAccount:'投票账户',
    vetoAccount:'取消投票账户'
  },
  listCancel:{
    voted:'已投票',
    cancel:'可取消',
    selectVote:'选择节点',
    availableVeto:'可取消投票数'
  },
  vote:{
    selectNode:'选择节点',
    voteDetials:'投票详情',
    vetoDetials:'取消投票详情',
    confirmVote:'确认投票',
    confirmVeto:'确认取消投票',
    amountPlaceHolder:"可用"
  },
  signMessage:{
    title:'请求签名',
    address: '签名地址',
    message:'签名消息',
    confirmSignature:'确认签名'
  },
  enable:{
    title:'应用授权',
    domain: '域名',
    message: '正在尝试连接到您的 Byone 上并调用相关 API，请仔细检查此站点的安全性并确认是否连接。',
    cancel:'拒绝',
    confirm:'连接'
  },
  disable:{
    title:'取消授权',
    domain: '域名',
    message: '取消授权用户信息。',
    cancel:'取消',
    confirm:'取消授权'
  },
  receive:{
    address: '地址',
    tips:'提示：点击地址进行拷贝。',
    vpWarning:'Vapor钱包地址请勿用于交易所充值提现'
  },
  main: {
    bytom:'主链',
    vapor:'侧链',
    mainnet: '主网络',
    testnet: '测试网络',
    solonet: '单机网络',
    mainNetShort: 'Bytom主网络',
    testNetShort: 'Bytom测试网络',
    soloNetShort: 'Bytom单机网络',
    vaporTestnetShort: 'Vapor测试网络',
    copy: '点击复制',
    send: '转账',
    receive: '收款',
    vote:'投票',
    crossChain:'跨链',
    record: '交易记录',
    asset:'我的资产',
    noAccount: '当前网络无账户信息',
    create: '创建账户',
    unconfirmed :'正在确认中',
    noRecord:"没有交易记录",
    noAssetRecord:"没有资产记录",
    network:'网络',
    totalAsset:'总资产'
  },
  asset:{
    title:'资产'
  },
  transactionDetail: {
    title: '交易详情',
    fee: '矿工费用',
    time:'交易时间',
    blockHeight: '区块高度',
    blockSize: '区块大小',
    transactionID: '交易Id',
    sendAddress: '发送地址',
    receiveAddress: '接收地址',
    myAddress: '（我的地址）',
    success:'交易成功',
    fail:'交易失败',
    pending:'未确认交易',
    tips:'提示：访问blockmeta.com来获取交易的相关信息。',
    assetId:'资产Id'
  },
  menu: {
    title: '切换账户',
    createAccount: '创建账户',
    backup: '备份',
    help: '帮助',
    setting: '设置',
  },
  createAccount: {
    title: '创建钱包',
    walletName:'请输入钱包名称',
    password:'请设置密码',
    confirmPassword: '请重复输入密码',


    accountAlias: '账户别名',
    keyAlias: '秘钥别名',
    keyPassword: '秘钥密码',
    create: '创建',
    select: '选择网络',
    file: '备份文件',
    import: '导入',
    back: '返回',
    passwordAgain: '两次密码不一致，请检查后再试。',
    inputAlias: '请输入账户别名',
    inputKey: '请输入秘钥别名',
    inputPass: '请输入密码',
    agreeService:'请阅读并同意使用条款。'
  },
  mnemonic:{
    "title":"备份助记词",
    "hint":"请牢记助记词，一旦丢失您的资产将无法找回！",
    "passwordHint":"请输入密码展示助记词"
  },
  verifyMnemonic:{
    "title":"验证助记词",
    "hint":"请按顺序输入助记词，单词中间用空格隔开",
  },
  error:{
    BTM0000: '必填项',
    BTM0001:'请输入助记词',
    BTM0002:'助记词验证失败，请输入正确助记词。',
    BTM0003:'请选择Keystore文件。',
    BTM0004:'请输入Keystore。',
    BTM0005:'输入数量大于可用余额。',
    BTM0006:'输入有效的地址格式。',
    BTM0007:'钱包名称错误，请输入正确钱包名称。',
    BTM0008:'密码不能为空',
    BTM0009:'目前钱包已为账户'
  },
  successMsg:{
    createWallet:{
      header: '创建成功',
      description:'请妥善保管好助记词。Enjoy it!'
    },
    restoreWallet:{
      header: '导入成功',
      description:'请妥善保管 Keystore 备份问文件，牢记验证密码。Enjoy it!'
    },
    transaction:{
      header: '确认成功',
      description:'交易已发送。Enjoy it!'
    }
  },
  wallet:{
    create:"创建钱包",
    success:'已成功切换至账户'
  },
  help: {
    title: '帮助',
    page: '帮助与信息'
  },
  setting: {
    lang: '显示语言',
    currency:'货币单位',
    deleteWallet:'删除钱包',
    deleteHint:'执行删除钱包操作前请确认您已备份好keystore文件，否则将无法找回！',
    deleteBack:'返回备份',
    deleteConfirm:'确认删除',
    deleteConfirmHint:'请输入钱包名称以确认删除',
    emptyWallet:'钱包名称不能为空'
  },
  backup: {
    title: '备份',
    button: '备份',
    mnemonic:'备份助记词',
    keystore:'备份Keystore',
    mnemonicHint:'请抄写助记词，并妥善保管',
    ok:'已完成'
  },
  protocol: {
    title: '用户服务协议',
    content: `尊敬的用户：
    感谢您选择Bytom Chrome Wallet服务。《Bytom Chrome Wallet服务协议》（以下简称“本协议”）由Bytom和用户（以下简称“您”或“用户”）签订，本协议在您与Bytom之间具有合同上的法律效力。
    Bytom在此特别提醒您在使用Bytom Chrome Wallet（以下简称“Bytom Chrome Wallet” 或“本软件”）之前，请认真阅读《Bytom Chrome Wallet服务协议》及后文提到的相关协议，尤其是本协议规定的“免责及责任限制”等条款将以加粗的形式体现，确保您充分理解本协议中各条款，并自主考虑风险。
    一、 关于本协议的确认与接纳
    1. 您理解本协议及有关协议适用于Bytom Chrome Wallet及未来Bytom Chrome Wallet上Bytom所自主开发和拥有的去中心化应用（简称“DApp”）（排除第三方开发的DApp）。
    2. 您下载Bytom Chrome Wallet软件并创建或导入钱包，即视为您已经充分阅读并接受本协议全部条款，本协议立即生效，对双方具有约束力。
    3. 本协议可由Bytom随时更新，经修改的协议一经在Bytom Chrome Wallet上公布，立即自动生效，恕不再另行通知。在Bytom公布修改协议条款后，如果您不接受修改后的条款，请立即停止使用Bytom Chrome Wallet，您继续使用Bytom Chrome Wallet将被视为接受修改后的协议。
    4. 如果您未满18周岁，或者是无民事行为能力人或限制民事行为能力人，请在父母或监护人指导下使用Bytom Chrome Wallet。
    二、 定义
    1. Bytom Chrome Wallet：指由Bytom基于Bytom（及将来陆续支持的其他公链）开发的区块链钱包，包括其他为方便用户使用区块链系统而开发的辅助工具。
    2. 用户：
    （1）用户必须是具备完全民事行为能力的自然人；
    （2）若您为18周岁以下的未成年人使用Bytom Chrome Wallet服务，需要在您父母或监护人的指导下使用Bytom Chrome Wallet。无民事行为能力人使用Bytom Chrome Wallet或限制民事行为能力人超过其民事权利或行为能力范围从事交易的，造成的一切后果，Bytom Chrome Wallet有权要求您及您的父母或监护人负责。
    3. 创建或导入钱包：指您使用Bytom Chrome Wallet，确认履行本协议并创建或导入钱包的过程。
    4. 钱包密码：指您在创建Bytom Chrome Wallet钱包过程中，软件操作界面提示您填写的密码，该密码用于加密保护私钥。作为去中心化的应用，钱包密码不存储在您的设备或Bytom的服务器，一旦丢失你需要借助备份恢复。
    5. 信息提示：Bytom Chrome Wallet软件操作界面涉及的信息提示内容，建议用户按照相关步骤进行操作。
    6. 特定用户：指按照中国法律法规及政策规定必须要配合Bytom履行个人信息披露义务的用户。
    7. 私钥：由256位随机字符构成，是用户拥有并使用数字资产的核心。
    8. 公钥：由私钥借助密码学原理单向推导生成，并用以生成区块链数字钱包地址，数字钱包地址即为公开收款地址。
    9. 助记词：符合区块链BIP39 行业标准，由随机算法生成的12（或15/18/21/24）个有序单词组成。是私钥的易记录表现形式，方便用户备份保管。
    10. Keystore: 是私钥或助记词经过用户设置的钱包密码加密保存的文件形式，它只存储在您的这台设备中，不会同步至Bytom服务器。
    11. 数字资产：指Bytom Chrome Wallet目前支持的数字资产种类，包括但不限于BTM等。
    12. 个人信息：指以电子或者其他方式记录的能够单独或者与其他信息结合识别用户个人身份的各种信息，包括但不限于自然人的姓名、出生日期、身份证件号码、个人生物识别信息、住址、电话号码、银行卡号、邮件地址、钱包地址、设备信息、操作记录、交易记录等，但不包括用户的钱包密码、私钥、助记词、Keystore。
    三、 服务内容
    1. 创建或导入钱包。对Bytom Chrome Wallet支持的数字资产，您可以使用Bytom Chrome Wallet生成新钱包或导入相关区块链系统的其它钱包工具生成的兼容钱包。
    2. 转账、收款。您可以使用Bytom Chrome Wallet的转账、收款功能进行数字资产的管理，即运用私钥进行电子签名，对相关区块链的账本进行修改。转账是指付款方利用收款方的区块链地址进行转账操作，实际的转账、收款行为均在相关区块链Bytom系统（而非Bytom Chrome Wallet）发生。
    3. 管理数字资产。您可以使用Bytom Chrome Wallet添加、保管并移除Bytom Chrome Wallet所支持的数字资产（BTM除外）。
    4. 浏览DApp。用户通过在Bytom Chrome Wallet上的链接，可以跳转至DApp并使用该DApp（包括CoinEra自己的DApp和第三方DApp）提供的服务。
    5. 交易记录。我们将通过区块链系统拷贝您全部或部分的交易记录。但交易记录以区块链系统的记载为准。
    6. 暂停服务。您知悉基于区块链系统交易“不可撤销”的属性，我们不能为您暂停或撤销转账交易等操作，但在一定情况下，我们可以暂停或者限制某位用户对Bytom Chrome Wallet软件的操作。
    7. 其他Bytom认为有必要提供的服务。
    用户接受Bytom提供的上述服务时应了解以下常见问题：
    1. 秉承着区块链的去中心化特点，并为了保护用户的数字资产安全，Bytom提供的是去中心化服务，大大区别于银行业金融机构。用户了解，Bytom不提供以下服务：
    （1）存储用户的钱包密码（即用户创建/导入钱包时设置的密码）、私钥、助记词、Keystore；
    （2）找回用户的钱包密码、私钥、助记词、Keystore；
    （3）冻结钱包；
    （4）挂失钱包；
    （5）交易回滚；
    （6）恢复钱包。
    2. 由于Bytom不提供上述服务，因此用户应当自行保管含有Bytom Chrome Wallet的设备、备份Bytom Chrome Wallet、备份钱包密码、助记词、私钥及Keystore。如用户遗失设备、删除且未备份Bytom Chrome Wallet、删除且未备份钱包、钱包被盗或遗忘钱包密码、私钥、助记词、Keystore，Bytom均无法还原钱包或找回钱包密码、私钥、助记词、Keystore；如用户进行交易时误操作（例如输错转账地址），Bytom亦无法取消交易。
    3. Bytom和Bytom Chrome Wallet所能够提供的数字资产管理服务并未包括所有已存在的数字资产，请勿通过Bytom Chrome Wallet操作任何Bytom Chrome Wallet不支持的数字资产。
    4. Bytom Chrome Wallet仅是用户的数字资产管理工具，并非交易所或交易平台。虽然本协议将多次提及“交易”，其行为泛指用户使用Bytom Chrome Wallet进行的转账和收款操作，这与交易所或交易平台上进行的“交易”有本质区别。
    5. Bytom Chrome Wallet上集成的DApp包括Bytom自主拥有的DApp和第三方平台提供的DApp。对于第三方平台提供的DApp，Bytom Chrome Wallet仅为用户进入DApp提供区块链浏览器。用户在第三方DApp上接受服务或进行交易前应自行判断和评估该第三方DApp提供的服务或交易是否存在风险。
    四、 您的权利义务
    （一）创建或导入钱包
    1. 创建或导入钱包：您有权在您的设备上通过Bytom Chrome Wallet创建和/或导入钱包，有权设定钱包的钱包密码等信息，并有权通过Bytom Chrome Wallet应用程序，使用自己的钱包在区块链上进行转账和收款等交易。
    2. 身份验证：按照有关法律法规和政策要求，特定用户在使用Bytom Chrome Wallet提供的有关服务时，应当按照Bytom Chrome Wallet的提示及时完成相关身份验证，要求您提交包括但不限于您的姓名、身份证号码、手机号码、银行卡号信息等个人信息。否则该特定用户将无法使用有关服务，因特定用户拖延造成的损失由您自行承担。
    3. Bytom可能为不同的终端设备开发不同的软件版本，您应当根据实际需要选择下载合适的版本进行安装。如果您从未经合法授权的第三方获取本软件或与本软件名称相同的安装程序，Bytom将无法保证该软件能否正常使用，也无法保证其安全性，因此造成的损失由您自行承担。
    4. 本软件新版本发布后，旧版软件可能无法使用。Bytom不保证旧版软件的安全性、继续可用性及提供相应的客户服务。请您随时核对并下载最新版本。
    （二）使用
    1. 用户应自行妥善保管设备、钱包密码、私钥、助记词、Keystore等信息。Bytom不负责为用户保管以上信息。因您遗失设备、主动或被动泄露、遗忘钱包密码、私钥、助记词、Keystore或遭受他人攻击、诈骗等所引起的一切风险、责任、损失、费用应由您自行承担。
    2. 遵循信息提示。您了解并同意遵循Bytom Chrome Wallet对您做出的信息提示，按照信息提示的内容进行操作，否则，由此引起的一切风险、责任、损失、费用等应由您自行承担。
    3. 您知悉并理解Bytom Chrome Wallet没有义务对链接的第三方DApp服务或交易履行尽职调查义务，您应当理性做出投资决策并自主承担相应的投资风险。
    4. 积极完成身份验证。当Bytom Chrome Wallet合理认为您的交易行为或交易情况出现异常的，或认为您的身份信息存在疑点的，或Bytom Chrome Wallet认为应核对您身份证件或其他必要文件的情形时，请您积极配合Bytom Chrome Wallet核对您的有效身份证件或其他必要文件，及时完成相关的身份验证。
    5. 转账。
    （1）您知悉对于Bytom Chrome Wallet服务中您可使用的日计转账限额和笔数，可能因为您使用该转账服务时所处的国家/地区、监管要求、转账目的、Bytom Chrome Wallet风险控制、身份验证等事由而不同。
    （2）您理解基于区块链操作的“不可撤销”属性，当您使用Bytom Chrome Wallet转账功能时，您应当自行承担因您操作失误而导致的后果（包括但不限于因您输错转账地址、您自身选择转账节点服务器的问题）。
    （3）您知悉在使用Bytom Chrome Wallet服务时，以下情况的出现可能导致转账“交易失败”或“打包超时”：
    a) 钱包余额不足；
    b) 交易矿工费不足；
    c) 区块链执行合约代码失败；
    d) 超出监管部门、Bytom Chrome Wallet或法律法规规定的付款额度；
    e) 网络、设备等技术故障；
    f) 区块链网络拥堵、故障等原因引起交易被抛弃；
    g) 您的地址或交易对方地址被识别为特殊地址, 如高风险地址、交易所地址、ICO 地址、Token地址等。
    （4）您知悉Bytom Chrome Wallet仅向您提供转账工具，在您使用Bytom Chrome Wallet完成转账后，Bytom即完成了当次服务的所有义务，Bytom对其他纠纷争议，不负担任何义务。
    6. 合法合规。您知悉在Bytom Chrome Wallet进行操作时或利用Bytom Chrome Wallet上的DApp进行交易时，您应当遵循有关法律法规、国家政策的要求。
    7. 公告通知。Bytom Chrome Wallet会以网站公告、电子邮件、发送短信、电话、消息中心信息、弹窗提示或客户端通知等方式向您发送通知，例如通知您交易进展情况，或者提示您进行相关操作，请您及时予以关注。
    8. 服务费用与纳税义务：
    （1）Bytom Chrome Wallet暂时不向您收取任何形式的服务费或手续费，将来需对某些服务进行收费时将另行约定或公布规则；
    （2）您使用Bytom Chrome Wallet进行转账时应支付矿工费，金额由您自行决定。矿工费由相关区块链系统收取；
    （3）您知悉在特定情况下，因为您所处的环境及网络状态不稳定，导致您的转账操作未完成时，亦会被相关区块链系统收取矿工费；
    （4）您因在Bytom Chrome Wallet进行交易而发生的所有应纳税负及其它方面的费用均由您负责支付。
    五、 风险提示
    1. 您了解并知悉，由于数字资产领域的法律法规政策尚未健全，该领域的数字资产可能会产生无法兑现、技术不稳定等重大风险。且数字资产的价格波动幅度远高于其他金融资产。我们谨慎提醒您应当根据自身财务状况和风险偏好，理性选择持有或处置任何一种数字资产。Bytom Chrome Wallet提供的行情查看功能仅系抓取部分交易所的数字资产汇率信息的搜索结果，并不表示为最新行情或最佳报价。
    2. 在使用Bytom Chrome Wallet服务时，若您或您的相对方未遵从本协议或相关网站说明、交易、支付页面中之操作提示、规则，Bytom Chrome Wallet并不保证交易会顺利完成，且Bytom Chrome Wallet不承担损害赔偿责任。若发生前述情形，而款项已先行入账您的或您的交易方的Bytom Chrome Wallet钱包或第三方钱包，您理解区块链操作具有的“不可逆”属性，以及相关交易具有“不可撤销”的特征，由您及您的相对方自行承担相应的风险后果。
    3. 您在交易过程中应当自行判断对方是否为完全民事行为能力人并自行决定是否与对方进行交易或转账给对方等，且您自行承担与此相关的所有风险。
    4. 在转账过程中，如果出现“交易失败”、“打包超时”等类似的异常信息提示时，您应通过相关区块链系统的官方途径或其他的区块链查询工具进行再次确认，以避免重复转账；否则，由此所引起的一切损失和费用应由您自行承担。
    5. 您理解当您在Bytom Chrome Wallet上创建或导入钱包之后，您的Keystore、私钥、助记词等信息仅存储在当前的这台设备中，不存储在Bytom Chrome Wallet或Bytom的服务器上。您可以按照Bytom Chrome Wallet提供的操作指南采取同步钱包等方式更换设备。但若您未保存或备份钱包密码、私钥、助记词、Keystore等信息且在您设备丢失的情况下，您的数字资产将因此丢失，Bytom无法为您找回，您需自行承担相应损失。若您在导出、保存或备份钱包密码、私钥、助记词、Keystore等信息的时候泄密，或保存或备份上述信息的设备或服务器被黑客攻击或控制等情况下，您的数字资产将因此丢失，Bytom无法为您找回，您需自行承担相应损失。
    6. 我们建议您在创建或导入钱包时对您钱包的钱包密码、私钥、助记词及Keystore等信息做好安全备份。我们提请您注意，请不要采用以下备份方式：截图、邮件、记事本、短信、微信、QQ等电子备份方式。我们建议您在纸质记事本上抄写助记词和Keystore等信息，同时您亦可将电子数据保管至密码管理器。
    7. 我们建议您在安全的网络环境中使用Bytom Chrome Wallet，确保您的设备没有越狱或Root， 以避免可能存在的安全隐患
    8. 请您在使用我们的服务过程中，警惕非Bytom Chrome Wallet官方的诈骗行为。一旦发现此类行为，我们鼓励您第一时间告知我们。
    六、 服务的变更、中断、终止
    1. 您同意Bytom为保证自主业务经营权可以暂时提供部分服务功能，或于将来暂停部分服务功能或开通新的服务功能。当任何功能减少或者增加或者变化时，只要您仍然使用Bytom提供的服务，表示您仍然同意本协议或者本协议修正后的条款。
    2. 为保护您的数字资产安全，尽量避免您在不具备区块链基础知识的前提下使用Bytom Chrome Wallet而产生的误操作或由此带来的风险，您必须先通过能力测评问卷并达到Bytom所要求的合格分数才能使用Bytom Chrome Wallet服务，否则，Bytom有权限制或拒绝提供部分或全部的服务功能。
    3. 您理解存在如下情形时，Bytom将暂停提供服务：
    （1）因设备、区块链系统维修、升级、故障和通信中断等技术原因而中断业务；
    （2）因台风、地震、海啸、洪水、停电、战争或恐怖袭击等不可抗力因素，病毒、木马、黑客攻击、系统不稳定或政府行为等原因，造成Bytom系统不能提供服务或Bytom合理认为继续提供服务会有较大风险的；
    （3）发生Bytom无法控制或合理预见的其他情形。
    3. 当您出现如下情况时，Bytom可单方面中止或终止您使用Bytom Chrome Wallet的部分或全部功能:
    （1）用户死亡；
    （2）盗用他人的钱包信息或设备；
    （3）填写个人信息时提供虚假信息、在回答能力测评问卷时非本人操作；
    （4）拒绝Bytom为提升Bytom Chrome Wallet功能而发起的强制更新操作；
    （5）将Bytom Chrome Wallet用于违法或犯罪活动；
    （6）妨碍其他用户正常使用；
    （7）伪称Bytom的工作人员或管理人员；
    （8）攻击、侵入、更改或以任何其他方式威胁Bytom计算机系统的正常运作；
    （9）利用Bytom Chrome Wallet宣传垃圾广告；
    （10）散布谣言，损害Bytom和Bytom Chrome Wallet商誉；
    （11）违法行为，其他违反本协议的行为，及Bytom合理认为应当暂停功能的情形。
    4. 当您与Bytom之间的服务关系变更、中断、终止时，您仍有权在合理时间内导出您钱包等信息。
    七、 您合法使用Bytom服务的承诺
    1. 您应遵守中华人民共和国相关法律法规及您所居住的国家或地区的法律法规，不得将Bytom Chrome Wallet用于任何非法目的，也不得以任何非法方式使用Bytom服务。
    2. 您不得利用Bytom Chrome Wallet从事违法或犯罪的行为，包括但不限于：
    （1）反对宪法所确定的基本原则，危害国家安全、泄漏国家秘密、颠覆国家政权、破坏国家统一的；
    （2）从事任何违法犯罪行为，包括但不限于洗钱、非法集资等；
    （3）通过使用任何自动化程序、软件、引擎、网络爬虫、网页分析工具、数据挖掘工具或类似工具，接入Bytom服务、收集或处理Bytom所提供的内容，干预或试图干预任何用户或任何其他方式接入Bytom服务的行为；
    （4）提供赌博资讯或以任何方式引诱他人参与赌博；
    （5）侵入他人Bytom Chrome Wallet钱包盗取数字资产；
    （6）进行与交易对方宣称的交易内容不符的交易，或不真实的交易；
    （7）从事任何侵害或可能侵害Bytom Chrome Wallet服务系统、数据之行为；
    （8）其他违法以及Bytom有正当理由认为不适当的行为。
    3. 您理解并同意，如因您违反有关法律（包括但不限于海关及税务方面的监管规定）或者本协议之规定，使Bytom遭受任何损失、受到任何第三方的索赔或任何行政管理部门的处罚，您应对Bytom进行赔偿，包括合理的律师费用。
    4. 您承诺按时缴纳Bytom的服务费用（如有），否则Bytom有权暂停或中止对您提供的服务。
    八、 隐私条款
    1. Bytom十分重视对用户隐私的保护，相关隐私保护政策请参考Bytom公布并不时更新的《Bytom Chrome Wallet隐私政策》。
    九、 免责及责任限制
    1. Bytom仅对本协议中所列明的义务承担责任。
    2. 您理解和同意，在法律所允许的范围内，Bytom只能按照现有的技术水平和条件提供服务。因下列原因导致Bytom Chrome Wallet无法正常提供服务，Bytom不承担责任：
    （1）Bytom Chrome Wallet系统停机维护或升级；
    （2）因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因；
    （3）您的设备软硬件和通信线路、供电线路出现故障的；
    （4）您操作不当或未通过Bytom授权或认可的方式使用Bytom服务的；
    （5）因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、银行等原因或政府行为等原因；
    （6）非因Bytom的原因而引起的任何其它原因。
    3. Bytom对以下情形不承担责任：
    （1）因用户遗失设备、删除且未备份Bytom Chrome Wallet、删除且未备份钱包、钱包被盗或遗忘钱包密码、私钥、助记词、Keystore而导致的数字资产丢失；
    （2）因用户自行泄露钱包密码、私钥、助记词、Keystore，或借用、转让或授权他人使用自己的设备或Bytom Chrome Wallet钱包，或未通过Bytom官方渠道下载Bytom Chrome Wallet应用程序或其他不安全的方式使用Bytom Chrome Wallet应用程序导致的数字资产丢失；
    （3）因用户误操作（包括但不限于您输错转账地址、您自身选择转账节点服务器的问题）导致的数字资产丢失；
    （4）因时间滞后、区块链系统不稳定等原因导致Bytom拷贝用户在区块链上的交易记录发生偏差；
    （5）因用户不理解区块链技术的性质而进行误操作导致的数字资产丢失；
    （6）用户在第三方DApp上操作产生的风险和后果。
    4. 您理解Bytom Chrome Wallet仅作为您数字资产管理的工具。Bytom不能控制第三方DApp提供的产品及服务的质量、安全或合法性，信息的真实性或准确性，以及相对方履行其在与您签订的协议项下的各项义务的能力。所有您在第三方DApp进行的交易行为系您的个人行为，有约束力的合同关系在您和您的相对方之间建立，与Bytom Chrome Wallet无关。Bytom提醒您应该通过自己的谨慎判断确定登录DApp及相关信息的真实性、合法性和有效性。您与任何第三方交易所产生的风险亦应由您自行承担。
    5. Bytom可能同时为您及您的交易对手方提供服务，您同意对Bytom可能存在的该等行为予以明确豁免任何实际或潜在的利益冲突，并不得以此来主张Bytom在提供服务时存在法律上的瑕疵，也不因此而加重Bytom的责任或注意义务。
    6. Bytom不提供以下形式的保证：
    （1）Bytom从第三方交易所抓取的数字资产市场交易行情等信息的及时性、准确性、完整性、可靠性做出保证；
    （2）您经由Bytom服务取得的任何技术、产品、服务、资讯将符合您的期望；
    （3）Bytom服务将符合您的全部需求；
    （4）您在Bytom Chrome Wallet上的交易各方会及时履行其在与您达成的交易协议中各项义务。
    7. 您理解Bytom Chrome Wallet仅作为用户管理数字资产、显示交易信息的工具，Bytom不提供法律、税务或投资建议等服务。您应当自行向法律、税务、投资方面的专业人士寻求建议，且您在使用我们服务过程中所遭受的投资损失、数据损失等，Bytom概不负责。
    8.在任何情况下，Bytom对本协议所承担的违约赔偿责任总额不超过450BTM或人民币约500元，以较高的为准。
    9. 您理解根据有关中国政策法规的要求，我们可能不时更改我们的用户准入标准，限定向某一特定群体提供服务的范围和方式等。
    十、 完整协议
    1. 本协议由《Bytom Chrome Wallet服务协议》、《Bytom Chrome Wallet隐私政策》及Bytom不时公布的各项规则（包括“帮助中心”的内容）组成。
    2. 本协议的任何译文版本仅为方便用户而提供，无意对本协议的条款进行修改。如果本协议的中文版本与非中文版本之间存在冲突，应以中文版本为准。
    3.本协议部分内容被有管辖权的法院认定为违反或无效的，不因此影响其他内容的效力。
    十一、 知识产权保护
    1. Bytom Chrome Wallet系Bytom开发并拥有知识产权的应用程序。 Bytom Chrome Wallet中显示的任何内容（包括本协议、公告、文章、视频、音频、图片、档案、资讯、资料、商标或标识）的知识产权归Bytom或第三方权利人所有。用户仅可为持有和管理数字资产之目的使用Bytom Chrome Wallet应用程序及其中的内容。未经Bytom或第三方权利人的事先书面同意，任何人不得擅自使用、修改、反向编译、复制、公开传播、改变、散布、发行或公开发表上述应用程序及内容。
    十二、 法律适用与争议解决
    1. 本协议及其修订版之效力、解释、变更、执行与争议解决均适用中华人民共和国法律，如无相关法律规定，则应当适用国际商业惯例和（或）行业惯例。
    2. 若您和Bytom之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，任何一方可提交Bytom所在地有管辖权的法院管辖。
    十三、 其他
    1. 如您是中华人民共和国以外用户，您需全面了解并遵守您所在司法辖区与使用Bytom服务所有相关法律、法规及规则。
    2. 您在使用Bytom服务过程中，如遇到任何问题，您可以通过Bytom Chrome Wallet提供的官方渠道联系我们。
    3. 您可以在Bytom Chrome Wallet中查看本协议。Bytom鼓励您在每次访问Bytom Chrome Wallet时都查阅Bytom的服务协议。
    4. 本协议自2018年11月1日起适用。
    本协议未尽事宜，您需遵守Bytom不时更新的公告及相关规则。
    《Bytom Chrome Wallet隐私政策》
    最近更新于：2018年11月12日
    尊敬的用户：
    Bytom尊重并保护用户（以下简称“您”或“用户”）的隐私，您使用Bytom Chrome Wallet时，Bytom将按照本隐私政策（以下简称“本政策”）收集、使用您的个人信息。
    Bytom建议您在使用本产品（以下简称“Bytom Chrome Wallet”）之前仔细阅读并理解本政策全部内容, 针对免责声明等条款在内的重要信息将以加粗的形式体现。本政策有关关键词定义与Bytom《Bytom Chrome Wallet服务协议》保持一致。
    本政策可由Bytom在线随时更新，更新后的政策一旦公布即代替原来的政策，如果您不接受修改后的条款，请立即停止使用Bytom Chrome Wallet，您继续使用Bytom Chrome Wallet将被视为接受修改后的政策。经修改的政策一经在Bytom Chrome Wallet上公布，立即自动生效。 您知悉本政策及其他有关规定适用于Bytom Chrome Wallet及Bytom Chrome Wallet上Bytom所自主拥有的DApp。
    一、 我们收集您的哪些信息
    请您知悉，我们收集您的以下信息是出于满足您在Bytom Chrome Wallet服务需要的目的，且我们十分重视对您隐私的保护。在我们收集您的信息时，将严格遵守“合法、正当、必要”的原则。且您知悉，若您不提供我们服务所需的相关信息，您在Bytom Chrome Wallet的服务体验可能因此而受到影响。
    1. 我们将收集您的设备信息、操作记录、交易记录、钱包地址等个人信息。
    2. 为满足您的特定服务需求，我们将有可能收集您的姓名、银行卡号、手机号码、邮件地址等信息。
    3. 您知悉：您在Bytom Chrome Wallet 上的钱包密码、私钥、助记词、Keystore并不存储或同步至Bytom服务器。Bytom不提供找回您的钱包密码、私钥、助记词、Keystore的服务。
    4. 除上述内容之外，您知悉在您使用Bytom Chrome Wallet特定功能时，我们将在收集您的个人信息前向您作出特别提示，要求向您收集更多的个人信息。如您选择不同意，则视为您放弃使用Bytom Chrome Wallet该特定功能。
    5. 当您跳转到第三方DApp后，第三方DApp会向您收集个人信息。Bytom Chrome Wallet不持有第三方DApp向您收集的个人信息。
    6. 在法律法规允许的范围内，Bytom可能会在以下情形中收集并使用您的个人信息无需征得您的授权同意：
    （1） 与国家安全、国防安全有关的；
    （2） 与公共安全、公共卫生、重大公共利益有关的；
    （3） 与犯罪侦查、起诉、审判和判决执行等有关的；
    （4） 所收集的个人信息是您自行向社会公众公开的；
    （5） 从合法公开披露的信息中收集您的个人信息，如合法的新闻报道，政府信息公开等渠道；
    （6） 用于维护服务的安全和合规所必需的，例如发现、处理产品和服务的故障；
    （7） 法律法规规定的其他情形。
    7. 我们收集信息的方式如下：
    （1） 您向我们提供信息。例如，您在“个人中心”页面中填写姓名、手机号码或银行卡号，或在反馈问题时提供邮件地址，或在使用我们的特定服务时，您额外向我们提供。
    （2） 我们在您使用Bytom Chrome Wallet的过程中获取信息，包括您设备信息以及您对Bytom Chrome Wallet的操作记录等信息；
    （3） 我们通过区块链系统，拷贝您全部或部分的交易记录。但交易记录以区块链系统的记载为准。
    二、 我们如何使用您的信息
    1. 我们通过您设备的唯一序列号，确认您与您的钱包的对应关系。
    2. 我们将向您及时发送重要通知，如软件更新、服务协议及本政策条款的变更。
    3. 我们在Bytom Chrome Wallet的“系统设置”中为您提供“指纹登录”选项，让您方便且更安全地管理您的数字资产。
    4. 我们通过收集您公开的钱包地址和提供的设备信息来处理您向我们提交的反馈。
    5. 我们收集您的个人信息进行Bytom内部审计、数据分析和研究等，以期不断提升我们的服务水平。
    6. 依照《Bytom Chrome Wallet服务协议》及Bytom其他有关规定，Bytom将利用用户信息对用户的使用行为进行管理及处理。
    7. 法律法规规定及与监管机构配合的要求。
    三、 我们可能分享或传输您的信息
    1. Bytom在中华人民共和国境内收集和产生的用户个人信息将存储在中华人民共和国外的服务器上。若Bytom确需向境外传输您的个人信息，将在事前获得您的授权，且按照有关法律法规政策的要求进行跨境数据传输，并对您的个人信息履行保密义务。
    2. 未经您事先同意，Bytom不会将您的个人信息向任何第三方共享或转让，但以下情况除外：
    （1） 事先获得您明确的同意或授权；
    （2） 所收集的个人信息是您自行向社会公众公开的；
    （3） 所收集的个人信息系从合法公开披露的信息中收集，如合法的新闻报道，政府信息公开等渠道；
    （4） 与Bytom的关联方共享，我们只会共享必要的用户信息，且受本隐私条款中所声明的目的的约束；
    （5） 根据适用的法律法规、法律程序的要求、行政机关或司法机关的要求进行提供；
    （6） 在涉及合并、收购时，如涉及到个人信息转让，Bytom将要求个人信息接收方继续接受本政策的约束。
    四、 我们如何保护您的信息
    1. 如Bytom停止运营，Bytom将及时停止继续收集您个人信息的活动，将停止运营的通知公告在Bytom Chrome Wallet上，并对所持有的您的个人信息在合理期限内进行删除或匿名化处理。
    2. 为了保护您的个人信息，Bytom将采取数据安全技术措施，提升内部合规水平，增加内部员工信息安全培训，并对相关数据设置安全访问权限等方式安全保护您的隐私信息。
    3. 我们将在Bytom Chrome Wallet“消息中心”中向您发送有关信息安全的消息，并不时在Bytom Chrome Wallet“帮助中心”版块更新钱包使用及信息保护的资料，供您参考。
    五、 对未成年人的保护
    我们对保护未满18周岁的未成年人做出如下特别约定：
    1. 未成年人应当在父母或监护人指导下使用Bytom相关服务。
    2. 我们建议未成年人的父母和监护人应当在阅读本政策、《Bytom Chrome Wallet服务协议》及我们的其他有关规则的前提下，指导未成年人使用Bytom Chrome Wallet。
    3. Bytom Chrome Wallet将根据国家相关法律法规的规定保护未成年人的个人信息的保密性及安全性。
    六、 免责声明
    1. 请您注意，您通过Bytom Chrome Wallet接入第三方DApp后，将适用该第三方DApp发布的隐私政策。该第三方DApp对您个人信息的收集和使用不为Bytom所控制，也不受本政策的约束。Bytom无法保证第三方DApp一定会按照Bytom的要求采取个人信息保护措施。
    2. 您应审慎选择和使用第三方DApp，并妥善保护好您的个人信息，Bytom对其他第三方DApp的隐私保护不负任何责任。
    3. Bytom将在现有技术水平条件下尽可能采取合理的安全措施来保护您的个人信息，以避免信息的泄露、篡改或者毁损。Bytom系利用无线方式传输数据，因此，Bytom无法确保通过无线网络传输数据的隐私性和安全性。
    七、 其他
    1. 如您是中华人民共和国以外的用户，您需全面了解并遵守您所在司法辖区与使用Bytom服务所有相关法律、法规及规则。
    2. 您在使用Bytom服务过程中，如遇到任何有关个人信息使用的问题，您可以通过在Bytom Chrome Wallet提交反馈等方式联系我们。
    3. 您可以在Bytom Chrome Wallet中查看本政策及Bytom其他服务规则。我们鼓励您在每次访问Bytom Chrome Wallet时都查阅Bytom的服务协议及隐私政策。
    4. 本政策的任何译文版本仅为方便用户而提供，无意对本政策的条款进行修改。如果本政策的中文版本与非中文版本之间存在冲突，应以中文版本为准。
    5. 本政策自2018年11月12日起适用。
    本政策未尽事宜，您需遵守Bytom不时更新的公告及相关规则。
    `
  }
}

export default cn
