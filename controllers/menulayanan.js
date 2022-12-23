const menulayanan = {}
const fs = require('fs')

menulayanan.index = (req, res) => {
    try {
        let rawdata = fs.readFileSync('./assets/menutawkto.json')
        let menus = JSON.parse(rawdata)
        res.send({
            status: true,
            message: 'Data Di Temukan..!',
            data: menus.items
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: 'Data Tidak Di Temukan..!',
            data: null
        })
    }
}

module.exports = menulayanan