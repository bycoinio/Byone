<style lang="" scoped>
  .header {
    display: flex;
  }
  .header p{
    text-align: center;
    width: 280px;
    padding-top: 17px;
  }

.preview i {
    width: 100px;
    margin: 0 auto;
    display: block;
    width: 45px;
    font-size: 45px;
    margin-bottom: 25px;
}
.preview .value {
    font-size: 30px;
    width: 300px;
    margin: 0 auto;
    text-align: center;
}
.preview .value span {
    font-size: 18px;
}

.title {
    font-size: 18px;
    font-weight: inherit;
    color: #cacaca;
    text-align: center;
    padding: 5px 0;
}
.transaction {
    padding: 0 20px;
    font-size: 14px;
    word-break: break-all;
    height: 380px;
    width: 275px;
    margin-top: 20px;
}
.transaction .label {
    width: 35%;
    vertical-align: top;
    word-break: break-word;
}
.transaction .value{
  width: 65%;
  color: #282828;
  font-weight: 500;
  word-break: break-word;
}
  .panel{
    padding: 0;
  }
  .tx-header{
    height: 40px;
    width: 280px;
    text-align: center;
    padding: 20px;
  }
  .tx-header .value{
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
  .success-header{
    background-image: url("../assets/img/backgroundHead/succeed.svg");
    background-size: 320px 80px;
  }
  .pending-header{
    background-image: url("../assets/img/backgroundHead/pending.svg");
    background-size: 320px 80px;
  }
  .fail-header{
    background-image: url("../assets/img/backgroundHead/fail.svg");
    background-size: 320px 80px;
  }
  .header-text{
    color:rgba(255,255,255,0.50);
  }
  .asset{
    text-transform: uppercase;
  }
  .divider{
    margin: 10px 0;
  }
  .footer{
    text-align: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
    font-size: 12px
  }
</style>

<template>
    <div class="bg-gray warp-child">
        <section class="header bg-header">
            <i class="iconfont icon-back" @click="$router.go(-1)"></i>
            <p >{{ $t('transactionDetail.title') }}</p>
        </section>

        <section class="panel">
            <div class="tx-header"
                 v-bind:class="classObject">
              <p class="value">{{transaction.direct}}{{transaction.val}}</p>
              <small class="header-text" v-if="!transaction.status">
                {{ $t('transactionDetail.fail') }}
              </small>
              <small class="header-text" v-else-if="transaction.hasOwnProperty('blockTimestamp')">
                {{ $t('transactionDetail.success') }}
              </small>
              <small class="header-text" v-else>
                {{ $t('transactionDetail.pending') }}
              </small>
            </div>
            <vue-scroll>
                <div class="transaction">
                    <table style="margin-bottom: 20px">
                      <tbody>
                      <tr>
                        <td class="label">
                          {{ $t('transactionDetail.transactionID') }}
                        </td>
                        <td class="value">
                          <p>{{transaction.hash}}</p>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2"><div class="divider"></div></td>
                      </tr>

                      <tr>
                        <td class="label">
                          {{ $t('transactionDetail.assetId') }}
                        </td>
                        <td class="asset value">
                          <p>{{currentAsset.asset.assetId}}</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="label">
                          {{ $t('transactionDetail.time') }}
                        </td>
                        <td class="value">
                            <div v-if="transaction.hasOwnProperty('blockTimestamp')">
                              {{transaction.submissionTimestamp | moment}}
                            </div>
                            <div v-else>
                              -
                            </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="label">
                            {{ $t('transactionDetail.blockHeight') }}
                        </td>
                        <td class="value">
                          <p v-if="transaction.blockHeight != undefined">{{transaction.blockHeight}}</p>
                          <p v-else>-</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="label">
                          {{ $t('transactionDetail.blockSize') }}
                        </td>
                        <td class="value">
                          <p>{{transaction.size}}</p>
                        </td>
                      </tr>
                      <tr>
                        <td class="label">
                          {{ $t('transactionDetail.fee') }}(BTM)
                        </td>
                        <td class="value">
                          <p>{{transaction.fee}}</p>
                        </td>
                      </tr>
                      <tr v-if="transaction.type =='vote' || transaction.type =='veto' ">
                        <td colspan="2"><div class="divider"></div></td>
                      </tr>
                      <tr  v-if="transaction.type =='vote' || transaction.type =='veto'">
                        <td class="label">
                          {{ $t('listVote.bpName') }}
                        </td>
                        <td class="value">
                          <p>{{transaction.vName}}</p>
                        </td>
                      </tr>
                      <tr  v-if="transaction.type =='vote'">
                        <td class="label">
                          {{ $t('listVote.voteVotes') }}
                        </td>
                        <td class="value">
                          <p>{{transaction.vAmount}}</p>
                        </td>
                      </tr>
                      <tr v-if="transaction.type =='crossChain'">
                        <td colspan="2"><div class="divider"></div></td>
                      </tr>
                      <tr  v-if="transaction.type =='crossChain'">
                        <td class="label">
                          {{ $t('crossChain.direction') }}
                        </td>
                        <td class="value">
                          <p>{{transaction.cDirection}}</p>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2"><div class="divider"></div></td>
                      </tr>
                      <tr :key="'input'+index" v-for="(input, index) in transaction.inputs">
                        <td class="label">{{ $t('transactionDetail.sendAddress') }}{{transaction.inputs.length > 1 ? index+1 : ''}}</td>
                        <td class="value">{{input.address}}<span v-if="input.address == selfAddress"> {{ $t('transactionDetail.myAddress') }}</span></td>
                      </tr>
                      <tr :key="'output'+ index" v-for="(output, index) in transaction.outputs">
                        <td class="label">{{ $t('transactionDetail.receiveAddress') }}{{transaction.outputs.length > 1 ? index+1 : ''}}</td>
                        <td class="value">{{output.address}}<span v-if="output.address == selfAddress"> {{ $t('transactionDetail.myAddress') }}</span></td>
                      </tr>

                      </tbody>
                    </table>
                </div>
            </vue-scroll>
        </section>
        <small class="footer color-grey">{{ $t('transactionDetail.tips') }}</small>
    </div>
</template>

<script>
  import {  mapState, mapGetters } from 'vuex'

  export default {
    name: "",
    data() {
        return {
            selfAddress: "",
            transaction: {
                guid: "",
                to: "",
                amount: 0,
                fee: ""
            }
        };
    },
    methods: {
    },
    computed: {
      classObject: function () {
        return {
          'success-header': this.transaction.status && this.transaction.hasOwnProperty('blockTimestamp'),
          'pending-header': this.transaction.status  && !this.transaction.hasOwnProperty('blockTimestamp') ,
          'fail-header': !this.transaction.status
        }
      },
      ...mapState([
        'currentAsset',
        'listVote'
      ]),
      ...mapGetters([
        'currentAccount',
        'netType'
      ])
    },
    mounted() {
        let params = this.$route.params;

        let transaction = params.transaction;
        if(this.netType === 'vapor'){
          this.selfAddress = this.currentAccount.vpAddress;
        }else{
          this.selfAddress = this.currentAccount.address;
        }
        console.log(params.transaction)
        if(transaction.type =='vote' || transaction.type =='veto'){
          const node =_.find(this.listVote, {pubKey: transaction.pubkey})
          transaction.vName = node.name
        }
        this.transaction = transaction
    }
};
</script>
