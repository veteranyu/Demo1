<template>

<div>
	<div class="page-container">
		<h1>List</h1>
		<div class="box">
			<div class="tablebox" style="width: auto; overflow-y: auto">
				<div class="user-toolbar-button">
							<a href="/#/add" class="easyui-linkbutton" iconCls="icon-add"
								onclick="userOpenAdd()" plain="true" style="margin-left: 10px">添加</a>
							<a href="#" class="easyui-linkbutton"
								iconCls="icon-bullet-magnify" onclick="userDetail()"
								plain="true">编辑</a>
							<a href="#" class="easyui-linkbutton"
								iconCls="icon-DeleteRed" onclick="userDel()"
								plain="true">删除</a>

						</div>
						<form id="dpost" method="post">
							<div class="user-toolbar-search">
								<label style="margin-left: 100px">条件：</label><input
									class="wu-text" style="width: 200px" id="dn" name="dn">
								<a href="#" class="easyui-linkbutton" iconCls="icon-search"
									onclick="searchDatagrid()" style="margin-left: 100px">检索</a>
							</div>
						</form>
			</div>
		</div>
	</div>
	<div class="box">
		<div class="tablebox" style="width: auto; overflow-y: auto">
			<table
				class="table table-striped table-bordered table-hover dataTable role-list">
				<thead>
					<tr>
						<th width="5%">id</th>
						<th width="10%">name</th>
						<th width="10%">description</th>
						<th width="10%">price</th>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td class="table_no_data" colspan="4">无符合查询条件的数据</td>
					</tr>

				</tbody>
			</table>
		</div>
	</div>
	</div>
	
</div>

</template>

<script>
  import clipboard from 'clipboard-js'
  
  export default {
    data() {
      return {
      }
    },
    created() {
		this.loadUser();
	},
    mounted() {
      global.jQuery('#clipboard').tooltip('hide')
        .attr('data-title', 'Copied!')
        .attr('data-placement', 'right')
        .attr('data-trigger', 'click')
    },
    methods: {
      submit() {
        this.shortened = ''
		const server = config.server
        // Shorten URL
        fetch(server+'url', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            this.shortened = data.error
          } else {
            this.shortened = data.data.url
          }
        })
      },
      loadUser() {
			if (!this.fetch) return;

			this.loading = true;
			this.$api.getProduct({id: this.data.id}).then((product) => {
				this.product = product;
				this.loading = false;
			});
		},

    }
  }
  
  

</script>

<style scoped>
  .submit-row {
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 10px;
    display: flex;
    flex-direction: row;
  }

  .submit-row>input {
    margin-left: 15px;
    margin-right: 15px;
  }

  .box {
    color: black;
    border-radius: 5px;
    background-color: whitesmoke;
    width: 500px;
    padding-bottom: 20px;
  }

  @media only screen and (max-width: 768px) {
    .box {
      width: 90%;
    }
  }

  .form-group {
    margin: 0 auto;
    width: 90%;
  }

  .label-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px;
  }
   h1 {
    text-align: center;
    color: whitesmoke;
  }
  p {
    text-align: center;
  }
</style>
