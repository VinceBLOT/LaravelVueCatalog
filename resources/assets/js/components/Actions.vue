<template>
    <div class="btn-group-vertical" role="group" aria-label="Actions" v-cloak>
        <button
            type="button"
            class="button is-primary is-fullwidth"
            title="Show"
            @click="showData(rowData)">
            <span> Detail </span>
        </button>

        <button
            type="button"
            class="button is-warning is-fullwidth"
            title="Edit"
            @click="editData(rowData)">
            <span> Edit </span>
        </button>

        <button
            type="button"
            class="button is-danger is-fullwidth"
            title="Delete"
            @click="deleteData(rowData)">
            <span> Delete</span>
        </button>
    </div>
</template>

<script>
    import router from '../routes'
    import bus from '../Bus.js';

    export default {
        props: {
            rowData: {
                type: Object,
                required: true
            }
        },
        methods: {
            showData(rowData) {
                let $resource = $('table').attr('data-resource');
                router.push({ name: $resource + '-show', params: { id: rowData.id }});
            },
            editData(rowData) {
                let $resource = $('table').attr('data-resource');
                router.push({ name: $resource + '-edit', params: { id: rowData.id } });
            },
            deleteData(rowData) {
                swal({
                    title: 'Confirmation',
                    text: 'Are you sure you want to delete this?',
                    type: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Yes',
                    showLoaderOnConfirm: true
                }).then(() => {
                    swal.disableButtons();
                    let formData = new FormData();
                    let $resource = $('table').attr('data-resource');
                    formData.set('_method', 'DELETE');
                    var url = 'api' + '/' + $resource + '/' + rowData.id;
                    Vue.http.delete(url, formData)
                        .then(response => {
                            this.$parent.$emit('refresh-table');
                            swal('Success', 'Your data has been deleted.', 'success');
                        }).catch(response => {
                            swal('Error', 'Failed to delete your data.', 'error');
                        });
                    });
                }
            }
        }
</script>
