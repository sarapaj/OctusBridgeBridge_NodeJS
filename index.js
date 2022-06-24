const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const port = 3000

const apiUrl = 'https://api.octusbridge.io/v1'
const testUrl = 'https://api-test.octusbridge.io/v1'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  //#region burn_callbacks

  // Get burn callbacks data.
  app.post('/burn_callbacks/search', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/burn_callbacks/search`,
        data: {
            amountGe: req.body.amountGe,
            amountLe: req.body.amountLe,
            callId: req.body.callId,
            chainId: req.body.chainId,
            createdAtGe: req.body.createdAtGe,
            createdAtLe: req.body.createdAtLe,
            creditProcessorAddress: req.body.creditProcessorAddress,
            ethUserAddress: req.body.ethUserAddress,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            proxyAddress: req.body.proxyAddress,
            tonEventUserAddress: req.body.tonEventUserAddress
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

//#endregion

//#region dao

// Get stakeholders data.
app.post('/dao/search/stakeholders', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/dao/search/stakeholders`,
        data: {
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get stakeholder data.
app.get('/dao/user/:user_address', (req, res) => { 
    axios({
        method: 'get',
        url: `${apiUrl}/dao/user/${req.params.user_address}`
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})
//#endregion

//#region relays

// Get relay info.
app.post('/relays_pages/relay_info', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/relay_info`,
        data: {
            relayAddress: req.body.relayAddress
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get relay info.
app.post('/relays_pages/relay_round_info', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/relay_round_info`,
        data: {
            relayAddress: req.body.relayAddress,
            roundNum: req.body.roundNum
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get relays round info.
app.post('/relays_pages/relays_round_info', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/relays_round_info`,
        data: {
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            roundNum: req.body.roundNum
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get all relays round info.
app.post('/relays_pages/all_relay_rounds_info', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/all_relay_rounds_info`,
        data: {
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            userAddress: req.body.userAddress
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get round info.
app.post('/relays_pages/round_info', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/round_info`,
        data: {
            roundNum: req.body.roundNum
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get round info.
app.post('/relays_pages/search/relays', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/search/relays`,
        data: {
            createdAtGe: req.body.createdAtGe,
            createdAtLe: req.body.createdAtLe,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            relayAddresses: req.body.relayAddresses,
            roundNum: req.body.roundNum,
            stakeGe: req.body.stakeGe,
            stakeLe: req.body.stakeLe,
            transferContractAddress: req.body.transferContractAddress
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get relay's events.
app.post('/relays_pages/search/relays_events', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/search/relays_events`,
        data: {
            amountGe: req.body.amountGe,
            amountLe: req.body.amountLe,
            chainId: req.body.chainId,
            ethUserAddress: req.body.ethUserAddress,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            relayAddress: req.body.relayAddress,
            roundNum: req.body.roundNum,
            timestampGe: req.body.timestampGe,
            timestampLe: req.body.timestampLe,
            tokenAddress: req.body.tokenAddress,
            tonUserAddress: req.body.tonUserAddress,
            transferContractAddress: req.body.transferContractAddress,
            transferKind: req.body.transferKind
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get global relay's events.
app.post('/relays_pages/search/global_relays_events', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/search/global_relays_events`,
        data: {
            amountGe: req.body.amountGe,
            amountLe: req.body.amountLe,
            chainId: req.body.chainId,
            ethUserAddress: req.body.ethUserAddress,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            roundNum: req.body.roundNum,
            timestampGe: req.body.timestampGe,
            timestampLe: req.body.timestampLe,
            tokenAddress: req.body.tokenAddress,
            tonUserAddress: req.body.tonUserAddress,
            transferContractAddress: req.body.transferContractAddress,
            transferKind: req.body.transferKind
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get round's calendar.
app.post('/relays_pages/rounds_calendar', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/rounds_calendar`,
        data: {
            fromRoundNum: req.body.fromRoundNum,
            toRoundNum: req.body.toRoundNum
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get relay rounds info.
app.post('/relays_pages/relay_rounds_info', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/relays_pages/relay_rounds_info`,
        data: {
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            roundNum: req.body.roundNum,
            userAddress: req.body.userAddress
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

//#endregion

//#region staking

// Get stakeholders data.
app.post('/staking/search/stakeholders', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/staking/search/stakeholders`,
        data: {
            createdAtGe: req.body.createdAtGe,
            createdAtLe: req.body.createdAtLe,
            frozenStakeGe: req.body.frozenStakeGe,
            frozenStakeLe: req.body.frozenStakeLe,
            lastRewardGe: req.body.lastRewardGe,
            lastRewardLe: req.body.lastRewardLe,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            relayCreatedAtGe: req.body.relayCreatedAtGe,
            relayCreatedAtLe: req.body.relayCreatedAtLe,
            stakeholderAddresses: req.body.stakeholderAddresses,
            stakeholderKind: req.body.stakeholderKind,
            totalRewardGe: req.body.totalRewardGe,
            totalRewardLe: req.body.totalRewardLe,
            untilFrozenGe: req.body.untilFrozenGe,
            untilFrozenLe: req.body.untilFrozenLe,
            userBalanceGe: req.body.userBalanceGe,
            userBalanceLe: req.body.userBalanceLe,
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get transactions data.
app.post('/staking/search/transactions', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/staking/search/transactions`,
        data: {
            amountGe: req.body.amountGe,
            amountLe: req.body.amountLe,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            timestampBlockGe: req.body.timestampBlockGe,
            timestampBlockLe: req.body.timestampBlockLe,
            transactionKind: req.body.transactionKind,
            userAddress: req.body.userAddress,
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get tvl graph data.
app.post('/staking/graph/tvl', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/staking/graph/tvl`,
        data: {
            from: req.body.from,
            timeframe: req.body.timeframe,
            to: req.body.to
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get apr graph data.
app.post('/staking/graph/apr', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/staking/graph/apr`,
        data: {
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get main page data.
app.get('/staking/main', (req, res) => { 
    axios({
        method: 'get',
        url: `${apiUrl}/staking/main`
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Post user page data.
app.post('/staking', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/staking`,
        data: {
            userAddress: req.body.userAddress
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})
//#endregion

//#region transfers

// Get transfers data.
app.post('/transfers/search', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/transfers/search`,
        data: {
            createdAtGe: req.body.createdAtGe,
            createdAtLe: req.body.createdAtLe,
            ethTokenAddress: req.body.ethTokenAddress,
            ethTonChainId: req.body.ethTonChainId,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            status: req.body.status,
            tonEthChainId: req.body.tonEthChainId,
            tonTokenAddress: req.body.tonTokenAddress,
            transferKinds: req.body.transferKinds,
            updatedAtGe: req.body.updatedAtGe,
            updatedAtLe: req.body.updatedAtLe,
            userAddress: req.body.userAddress,
            volumeExecGe: req.body.volumeExecGe,
            volumeExecLe: req.body.volumeExecLe
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get not instant transfers data.
app.post('/transfers/search_not_instant', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/transfers/search_not_instant`,
        data: {
            bountyGe: req.body.bountyGe,
            bountyLe: req.body.bountyLe,
            chainId: req.body.chainId,
            contractAddress: req.body.contractAddress,
            createdAtGe: req.body.createdAtGe,
            createdAtLe: req.body.createdAtLe,
            ethTokenAddress: req.body.ethTokenAddress,
            limit: req.body.limit,
            offset: req.body.offset,
            ordering: req.body.ordering,
            status: req.body.status,
            tonTokenAddress: req.body.tonTokenAddress,
            userAddress: req.body.userAddress,
            volumeExecGe: req.body.volumeExecGe,
            volumeExecLe: req.body.volumeExecLe
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get transfers main page.
app.get('/transfers/main_page', (req, res) => { 
    axios({
        method: 'get',
        url: `${apiUrl}/transfers/main_page`
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})

// Get not instant transfers data.
app.post('/transfers/graph/volume', (req, res) => { 
    axios({
        method: 'post',
        url: `${apiUrl}/transfers/graph/volume`,
        data: {
            from: req.body.from,
            timeframe: req.body.timeframe,
            to: req.body.to
        }
      })
    .then(function (response) {
        res.send(response.data)
    })
    .catch(function(error){
        console.error(error)
        res.send('Error')
    })
})
//#endregion