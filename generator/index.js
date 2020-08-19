module.exports = api => {
    api.render('./template');
    api.afterInvoke(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        const contentMain = fs.readFileSync(api.resolve(api.entryFile), { encoding: 'utf-8' })
        const lines = contentMain.split(/\r?\n/g)

        const appImportIndex = lines.findIndex(line => line.match(/import App from/))
        lines[appImportIndex] = `import App from '@/App.vue';${EOL}`

        const serviceWorkerImportIndex = lines.findIndex(line => line.match(/registerServiceWorker/))
        lines[serviceWorkerImportIndex] = `import '@/registerServiceWorker';${EOL}import '@/styles/custom.sass';${EOL}`

        const routerImportIndex = lines.findIndex(line => line.match(/import router from/))
        lines[routerImportIndex] = `import router from '@/router';`

        const storeImportIndex = lines.findIndex(line => line.match(/import store from/))
        lines[storeImportIndex] = `import store from '@/store';${EOL}${EOL}`
            +`import i18n from '@/plugins/i18n';${EOL}`
            +`import vuetify from '@/plugins/vuetify';${EOL}${EOL}`
            +`import apiService from '@/service';${EOL}`
            +`import filters from '@/filters';${EOL}${EOL}`
            +`apiService.init();${EOL}`
            +`filters.init();`

        const newVueIndex = lines.findIndex(line => line.match(/Vue\(\{/))
        lines[newVueIndex] += `${EOL}  vuetify,${EOL}  i18n,`

        fs.writeFileSync(api.resolve(api.entryFile), lines.join(EOL), { encoding: 'utf-8' })
    });
    api.extendPackage({
        scripts: {
            'i18n:report': "vue-cli-service i18n:report --src './src/**/*.?(js|vue)' --locales" +
                " './src/locales/**/*.json'"
        },
        dependencies: {
            axios: '^0.19.2',
            pug: '^3.0.0',
            vuetify: '^2.2.11',
            'pug-plain-loader': '^1.0.0',
            'vue-i18n': '^8.17.3',
            'vue-axios': '^2.1.5'
        },
        devDependencies: {
            sass: '^1.19.0',
            'vuetify-loader': '^1.3.0',
            'vue-cli-plugin-i18n': '~1.0.1',
            'vue-cli-plugin-vuetify': '~2.0.7'
        }
    })
}
