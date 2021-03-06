var express = require('express')
var route = express()

const home = require('../controllers/home')
const alurdaftar = require('../controllers/alurdaftar')
const biaya = require('../controllers/biaya')
const kontak = require('../controllers/kontak')
const utility = require('../controllers/utility')
const jadwal = require('../controllers/jadwal')
const infoapps =require('../controllers/infoapps')

// home
route.get('/menu', home.menu)
route.get('/calendar',home.calendar)
route.get('/event',home.event)
route.get('/sosmed',home.sosmed)
route.get('/menuPanduanElearning',home.menuPanduanElearning)
route.get('/menuPanduanSimakad',home.menuPanduanSimakad)
route.get('/banner',home.banner)
route.get('/slider',home.slider)
route.get('/steplogin',home.stepLogin)
route.get('/fakultas',home.fakultas)

// alurdaftar
route.get('/alurdaftar', alurdaftar.index)

// biaya
route.get('/biaya', biaya.index)

// kontak
route.get('/kontak', kontak.index)

// utility
route.get('/utility', utility.index)

// jadwal
route.get('/jadwal', jadwal.index)

// infoapps
route.get('/infoapps', infoapps.index)


// test
// route.get('/test', jadwal.dataJadwalCBT)



module.exports = route