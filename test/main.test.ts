const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("AnimaguSwap", function () {
    let animaguSwap: any

    before(async function () {
        // 部署 AnimaguSwap 合约
        const AnimaguSwap = await ethers.getContractFactory("AnimaguSwap")
        animaguSwap = await AnimaguSwap.deploy()
    })
    it("should recover secret correctly", async function () {
        const shares = [
            "0xdff8f86873981d0583c9ac826efd0b46e7c0958b14caea63c962effe177985c2b52e8a946ae68f751167c9520c4d48224da92017e7b143120aac8c0b98e0d5f1",
            "0x7b22746f223a22307838366463643332393343353343663845466437333033423537626562326133463637316444453938222c2264617461223a223078333865643137333930303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303038616337323330343839653830303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303032333836663236666331303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030613030303030303030303030303030303030303030303030303065376633363361333538633763663037623863353965336435646537646534393463323163666436303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303036353164313363383030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303230303030303030303030303030303030303030303030303031663938343061383564356166356266316431373632663932356264616464633432303166393834302f503737c7bc98132aac6683adc13324e9486f9aa51b657c029cd649391ebdb26faf05abcef849a5c121c89adf59e91d4013b911207a80f02029b7aa5698534c8c",
        ]
        // const input =
        // "0x81c795787b0e7254b46835512d5013f31770bf8281718b5a71ba02f41605333dff503072c63b2bb8d6a51cf8347a8788f11bdd9b4bb1846996c61065ffff6bdc727f3a0e04aa641a546bb336e0174c07bcb7983e40280364deabd1bcd26a933a07609ccd4f51d49d12ef5f1bd7ca54b0637ff923356a0c218ba961dcfa31bea0545cef38e1387b4379dbbda1a5c28386031d733091a803f0a06e1fb14e249c4710fbbf44392e784416da78b992b30038"
        // const hexString = "1"
        // 调用合约
        const input = "0x00000111"
        console.log("Calling recoverSecret...")
        const result = await animaguSwap.recoverSecret(shares)
        // const result = await animaguSwap.
        console.log(result)
        const expected =
            "0x7b22746f223a22307838366463643332393343353343663845466437333033423537626562326133463637316444453938222c2264617461223a22307833386564313733393030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303861633732333034383965383030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303233383666323666633130303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303061303030303030303030303030303030303030303030303030306537663336336133353863376366303762386335396533643564653764653439346332316366643630303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303635316366663161303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030323030303030303030303030303030303030303030303030303166393834306138356435616635626631643137363266393235626461646463343230316639383430303030303030303030303030303030303030303030303066666639393736373832643436636330353633306431663665626162313862323332346436623134227d"
        expect(result).equal(expected)
    })
})
