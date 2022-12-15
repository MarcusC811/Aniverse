const router = express.router();

const homeRoutes = require ('./homeRoutes');

router.get ('/', homeRoutes);


module.export = router;