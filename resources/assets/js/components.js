const Vuetable = require('vuetable-2/src/components/Vuetable.vue');
const VuetablePagination = require('vuetable-2/src/components/VuetablePagination.vue');
const VuetablePaginationDropdown = require('vuetable-2/src/components/VuetablePaginationDropdown.vue');

const BootstrapPagination = require('./components/BootstrapPagination.vue');

const VuestrapDatepicker = require('vue-strap').datepicker;
const VuestrapAlert = require('vue-strap').alert;

const Avatar = require('./components/Avatar.vue');
const Actions = require('./components/Actions.vue');
const Notify = require('./components/Notify.vue');
const ImageInput = require('./components/ImageInput.vue');
const CRUDForm = require('./components/CRUDForm.vue');
const Item = require('./components/Item.vue');
const ItemList = require('./components/ItemList.vue');
const ProductIndex = require('./components/product/Index.vue');

var data = {
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'wat' },
        {
            name: 'child folder',
            children: [
                {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' }
                    ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                    name: 'child folder',
                    children: [
                        { name: 'hello' },
                        { name: 'wat' }
                    ]
                }
            ]
        }
    ]
};

// define the item component
console.log(Item);
Vue.component('itemm', {
    template: Item.template,
    props: {
        model: Object
    },

});
Vue.component('product-index', ProductIndex);
Vue.component('item-list', ItemList);

Vue.component('vuetable', Vuetable);
Vue.component('vuetable-pagination', VuetablePagination);
Vue.component('vuetable-pagination-dropdown', VuetablePaginationDropdown);

Vue.component('bootstrap-pagination', BootstrapPagination);

Vue.component('datepicker', VuestrapDatepicker);
Vue.component('alert', VuestrapAlert);

Vue.component('avatar', Avatar);
Vue.component('actions', Actions);
Vue.component('notify', Notify);
Vue.component('image-input', ImageInput);
Vue.component('crud-form', CRUDForm);