const dir = [
"https://telegra.ph/file/bdbdda3294d2f65bd5c23.jpg",
"https://telegra.ph/file/79472b6a1ae9208339e8d.jpg",
"https://telegra.ph/file/04f1cbac5342f631306b1.jpg",
"https://telegra.ph/file/a1cae6b105bf11c5cd35f.jpg",
"https://telegra.ph/file/855eb59de3efa1c343852.jpg",
"https://telegra.ph/file/b778d3e166d015744f803.jpg",
"https://telegra.ph/file/522cba3b013deb912b670.jpg",
"https://telegra.ph/file/bbb2a3c02e5c0e3b44b46.jpg",
"https://telegra.ph/file/fec2c6bb18eb55b706ebf.jpg",
"https://telegra.ph/file/10e1e9742c20f2b472b85.jpg",
"https://telegra.ph/file/d2632bd14d4f58ad4d2a5.jpg",
"https://telegra.ph/file/1c8ffe52df95f982a4479.jpg",
"https://telegra.ph/file/1d31d899d32fcde8a1917.jpg",
"https://telegra.ph/file/eeda4919ca224672e531c.jpg",
"https://telegra.ph/file/a92695904d1afbeacefe1.jpg",
"https://telegra.ph/file/77abbc4d8857b07ec2975.jpg",
"https://telegra.ph/file/d14581c30c22882ed5bdd.jpg",
"https://telegra.ph/file/bd3d0cdb1001a95ecb23a.jpg",
"https://telegra.ph/file/691b4f81349158ea567b3.jpg",
"https://telegra.ph/file/d51e27f968ddfe9355b37.jpg",
"https://telegra.ph/file/8304d127b062df9a30211.jpg",
"https://telegra.ph/file/c0b210e135bba30d0d98c.jpg",
"https://telegra.ph/file/262246248cf2fc2ec8c15.jpg",
"https://telegra.ph/file/b02afc8cc380e77d9bd46.jpg",
"https://telegra.ph/file/8e20dcd2f3eafbfa8959f.jpg",
"https://telegra.ph/file/8e26a3c5a3ce6ce5494b9.jpg",
"https://telegra.ph/file/caa5ab0534291faebc2ac.jpg",
"https://telegra.ph/file/33ea0c1803e1876b1a446.jpg",
"https://telegra.ph/file/367b322fbbfc9bd59ec67.jpg",
"https://telegra.ph/file/d9127ea1389abaacb5ffa.jpg",
"https://telegra.ph/file/260f66ab9627e34d25135.jpg",
"https://telegra.ph/file/a646c2e04149e51a0b1f7.jpg",
"https://telegra.ph/file/6f0eb3f5c166e3424641a.jpg",
"https://telegra.ph/file/bc4d7e99023bd9081eed8.jpg",
"https://telegra.ph/file/d96eb83dbeb9acb2cc724.jpg",
"https://telegra.ph/file/63f9e43cecddb02030639.jpg",
"https://telegra.ph/file/50eb92b1f92e8fd3eddfe.jpg",
"https://telegra.ph/file/1d635087d4323a5cc13e2.jpg",
"https://telegra.ph/file/17e1eeb1cac42a2c4c980.jpg",
"https://telegra.ph/file/6e28ba52901ebe9329466.jpg",
"https://telegra.ph/file/e8cab17d03a4a70fb6a7d.jpg",
"https://telegra.ph/file/464f69ff5a2e5b360be90.jpg",
"https://telegra.ph/file/f2b4a547cde3104d465d6.jpg",
"https://telegra.ph/file/5104c56e322f21061cb88.jpg",
"https://telegra.ph/file/226225ea7df934f81c06a.jpg",
"https://telegra.ph/file/4554e95993f0a68e3c1e4.jpg",  
"https://telegra.ph/file/f92b992ec5778364a53e2.jpg",
"https://telegra.ph/file/7cb8c62a834c725e4f9d8.jpg",
"https://telegra.ph/file/52685cf01fc3b883dcf21.jpg",
"https://telegra.ph/file/985846b2beffc26e1686a.jpg",
"https://telegra.ph/file/40951997ad53141cd99cb.jpg",
"https://telegra.ph/file/4c027d0666c5513634a83.jpg",
"https://telegra.ph/file/25a14cd4fff811de1475f.jpg",
"https://telegra.ph/file/645de7e8ce68ade591bb2.jpg",
"https://telegra.ph/file/4b540ca77c8b2a1d1ec57.jpg",
"https://telegra.ph/file/53a5a6a5b2d71c6d3c163.jpg",
"https://telegra.ph/file/48571aa7be63a3de59ff2.jpg",
"https://telegra.ph/file/553bca98fe9dec4270ad7.jpg",
"https://telegra.ph/file/87a7bda3cfde01d2348ed.jpg",
"https://telegra.ph/file/7c24e7540548c2d74d424.jpg",
"https://telegra.ph/file/60eeedd13a6bb5be507b5.jpg",
"https://telegra.ph/file/328d7865de1bd1971a557.jpg",
"https://telegra.ph/file/e4b0461725fc22520eda9.jpg",
"https://telegra.ph/file/9bb6046502993d6ce6518.jpg",
"https://telegra.ph/file/8890c73047805cf78c00a.jpg",
"https://telegra.ph/file/dc81295351494c2a1c472.jpg",
"https://telegra.ph/file/4232a1c385ff9da68aef6.jpg",
"https://telegra.ph/file/ea550661d8ab4b84c6296.jpg",
"https://telegra.ph/file/8b2190dc849e24972152c.jpg",
"https://telegra.ph/file/f207b57a1f51412a203e7.jpg",
"https://telegra.ph/file/cf2fccd900ff2d0d131a1.jpg",
"https://telegra.ph/file/940e82466ed78e975a745.jpg",
"https://telegra.ph/file/b0c749d5e802332dcc11f.jpg",
"https://telegra.ph/file/769d89ef7f7336bd05a80.jpg",
"https://telegra.ph/file/f9138226511b3a30e958b.jpg",
"https://telegra.ph/file/8281fdf957ebca93aec0f.jpg",
"https://telegra.ph/file/3c6dd91466c9ed89d2bf7.jpg",
"https://telegra.ph/file/8bcad0c566c5f51ffe5bb.jpg",
"https://telegra.ph/file/4ac11fe77b659d5168b1e.jpg",
"https://telegra.ph/file/c3fcd3e486c6a3bee6f4f.jpg",
"https://telegra.ph/file/31de70933034c724b74f1.jpg",
"https://telegra.ph/file/2d249ca2b62c18af6baa3.jpg",
"https://telegra.ph/file/ef8ebed7d971ce6de5ee9.jpg",
"https://telegra.ph/file/777fb5cb0f6be330f9b8a.jpg",
"https://telegra.ph/file/20aef78978a92b8b0444b.jpg",
"https://telegra.ph/file/20bc0e05daf3272ea89b9.jpg",
"https://telegra.ph/file/a915d3752bac387b81adf.jpg",
"https://telegra.ph/file/c20048814324dd1a1bb77.jpg",
"https://telegra.ph/file/3b945a8a14851ece29de7.jpg",
"https://telegra.ph/file/abf7e03745ca2d298a9c1.jpg",
"https://telegra.ph/file/13e4a77349596c5ab8a79.jpg",
"https://telegra.ph/file/32bc65b3c0baa1eb6c284.jpg",
"https://telegra.ph/file/1c231e0675b7f6edd579a.jpg",
"https://telegra.ph/file/c564473a41ab8405dc3b9.jpg",
"https://telegra.ph/file/aa8bd2a777b01d0b24f4d.jpg",
"https://telegra.ph/file/a915d3752bac387b81adf.jpg",
"https://telegra.ph/file/59c075e64bdd0e17b659f.jpg",
"https://telegra.ph/file/f7c59f1787705d36043ca.jpg",
"https://telegra.ph/file/c20048814324dd1a1bb77.jpg",
"https://telegra.ph/file/d9153d75fc60d64026525.jpg",
"https://telegra.ph/file/3b945a8a14851ece29de7.jpg",
"https://telegra.ph/file/1c678a25b8b6482bc3cba.jpg",
"https://telegra.ph/file/cbc63680e04511756d57a.jpg",
"https://telegra.ph/file/f7c59f1787705d36043ca.jpg",
"https://telegra.ph/file/58081f8a94dbd1d1caf40.jpg",
"https://telegra.ph/file/e1539e82d5bc96bc9f15e.jpg",
"https://telegra.ph/file/36efa93ee22207c36ad2d.jpg",
"https://telegra.ph/file/6df3e879dd9c2e908859f.jpg",
"https://telegra.ph/file/cbc63680e04511756d57a.jpg",
"https://telegra.ph/file/65dc15eb996d69742fcb9.jpg",
"https://telegra.ph/file/986928ae97ba48c5f54be.jpg",
"https://telegra.ph/file/92379479bbe99f312f13f.jpg",
"https://telegra.ph/file/c46fda1ffbbaa3c406a29.jpg",
"https://telegra.ph/file/0d32e11e4a0dae13dac3d.jpg",
"https://telegra.ph/file/13a65df594224f0c46561.jpg",
"https://telegra.ph/file/17d2fd7d6e0fbfe0d74dd.jpg",
"https://telegra.ph/file/98acc5caa337ba06407b5.jpg",
"https://telegra.ph/file/102561f89b0967f27ce63.jpg",
"https://telegra.ph/file/e4f06eb175994ef6ebd41.jpg",
"https://telegra.ph/file/bf3a36c8f30e56dcbbfa5.jpg",
"https://telegra.ph/file/3a5b3ea59347b2f8fb805.jpg",
"https://telegra.ph/file/60262d7d56b4352993e88.jpg",
"https://telegra.ph/file/efbcd6bd3cd12b210d77c.jpg",
"https://telegra.ph/file/2d692d315587805dde1a9.jpg",
"https://telegra.ph/file/e51a3c070b031ccefb801.jpg",
"https://telegra.ph/file/a0a8e70592a5b2ccd2987.jpg",
"https://telegra.ph/file/5e1fc88c8803a0fc31523.jpg",
"https://telegra.ph/file/1f54bdd48b568aa05d593.jpg",
"https://telegra.ph/file/62ac12702441491e0c73b.jpg",
"https://telegra.ph/file/fa537428bb58b297e3ed3.jpg",
"https://telegra.ph/file/3155c1dc08fa26970d858.jpg",
"https://telegra.ph/file/e926a13e06728028d860d.jpg",
"https://telegra.ph/file/71e8a40317d9dd6dce50f.jpg",
"https://telegra.ph/file/1c9f11a44ac8ed88e073e.jpg",
"https://telegra.ph/file/271155de61db260ef09ba.jpg",
"https://telegra.ph/file/d898b26a10495e8c6792b.jpg",
"https://telegra.ph/file/f6b71e125dd4971253c39.jpg",
"https://telegra.ph/file/73e9f8a1692c470e63d04.jpg",
"https://telegra.ph/file/6c72d75cbb596fd757aba.jpg",
"https://telegra.ph/file/ede1c654d4c218c0b263b.jpg",
"https://telegra.ph/file/078671b7aee6dd8c4ae09.jpg",
"https://telegra.ph/file/04f6a1c2c271e3d0d9b08.jpg",
"https://telegra.ph/file/e1f3bc35cb2b201ec12e4.jpg",
"https://telegra.ph/file/0d6fb4189e171d90505f8.jpg",
"https://telegra.ph/file/efa364c3e60769ba75743.jpg",
"https://telegra.ph/file/65bf5dbc42b5c43fc5d2f.jpg",
"https://telegra.ph/file/03fd2e33eef17aa189e5a.jpg",
"https://telegra.ph/file/03fd2e33eef17aa189e5a.jpg",
"https://telegra.ph/file/855054f8f233540b8bdc7.jpg",
"https://telegra.ph/file/9c5e03843b07195c0e6d2.jpg",
"https://telegra.ph/file/5040ad2d3824e605df811.jpg",
  "https://telegra.ph/file/37654136d433cda49ddb5.jpg",
  "https://telegra.ph/file/4e5fae97ae4b8c2ada150.jpg",,
  "https://telegra.ph/file/967127100f10b8ecc6742.jpg",
  "https://telegra.ph/file/a0823ec4d76263f622bdb.jpg",
  "https://telegra.ph/file/0c52413904c09dfd2c811.jpg",
  "https://telegra.ph/file/07523b69ef4b36beb72d8.jpg",
  "https://telegra.ph/file/59afbca42e21f65f8cc15.jpg",
  "https://telegra.ph/file/2647f82b1a7e234a7809b.jpg",
  "https://telegra.ph/file/fd083fff3325929f0cdfd.jpg",
  "https://telegra.ph/file/be68121fa84422176bb28.jpg",
  "https://telegra.ph/file/969f822a24b4cd282cf76.jpg",
  "https://telegra.ph/file/aeecfb155e3cf7f0f5947.jpg",
  "https://telegra.ph/file/c678efc3ef7a1bc493119.jpg",
  "https://telegra.ph/file/fe2b8457c71bff359507e.jpg",
  "https://telegra.ph/file/e4a66bf21e84f4621414b.jpg",
  "https://telegra.ph/file/3bc11661292338b406b3e.jpg",
  "https://telegra.ph/file/c5b202989866b8846602a.jpg",
  "https://telegra.ph/file/503e51ef861e759700453.jpg",
  "https://telegra.ph/file/31c8c3e15a9746027c350.jpg",
  "https://telegra.ph/file/fbcffd3f0382ef3c1e7fd.jpg",
  "https://telegra.ph/file/6c14f8480ab9e8ed83612.jpg",
  "https://telegra.ph/file/910adda99f8a81b5a65e7.jpg",
  "https://telegra.ph/file/ab8dea1ffd87d9c179f14.jpg",
  "https://telegra.ph/file/220aaf3e0ead25c0ce553.jpg",
  "https://telegra.ph/file/8a8cc247936eec334cc42.jpg",
  "https://telegra.ph/file/6f46305f0816b1412298c.jpg",
  "https://telegra.ph/file/6fcb3f6c4c239c8d32859.jpg",
  "https://telegra.ph/file/6f46305f0816b1412298c.jpg",
  "https://telegra.ph/file/845f75cbae119f3115ddb.jpg",
  "https://telegra.ph/file/70bdf0c76dd30d80fa73f.jpg",
  "https://telegra.ph/file/7e6e1bcab1f6617dcf982.jpg",
  "https://telegra.ph/file/6c550192023fa2a255619.jpg",
  "https://telegra.ph/file/048847a5b87dd894abbca.jpg",
  "https://telegra.ph/file/048847a5b87dd894abbca.jpg",
  "https://telegra.ph/file/941bb9cff3d6634507a9a.jpg",
  "https://telegra.ph/file/dd85e81b3966b592b8b9f.jpg",
  "https://telegra.ph/file/e3ecf74b8eae3b6369cdc.jpg",
  "https://telegra.ph/file/23cae8ea8f0d46ff4b54c.jpg",
  "https://telegra.ph/file/e6e87fb7b23930a18d50d.jpg",
  "https://telegra.ph/file/bcbbc1465bf83e3459741.jpg",
  "https://telegra.ph/file/c4b972ad9cc53478f5aed.jpg",
  "https://telegra.ph/file/d766ef3af433954f1e119.jpg",
  "https://telegra.ph/file/bd6eef071257e8f72729f.jpg",
  "https://telegra.ph/file/4c81f511853ef00d4f678.jpg",
  "https://telegra.ph/file/114f0676e58f727f37420.jpg",
  "https://telegra.ph/file/95f8c93dfe10faf881386.jpg",
  "https://telegra.ph/file/68e6576943e747c17b2b8.jpg",
  "https://telegra.ph/file/c546ada04886aa58bfa58.jpg",
  "https://telegra.ph/file/523f47a50a6b2e9c9d01d.jpg",
  "https://telegra.ph/file/b8980fdb0ded2e35cf1f8.jpg",
  "https://telegra.ph/file/b91d6994d92fb14ffb9d9.jpg",
  "https://telegra.ph/file/c24b4695d44f40689da53.jpg",
  "https://telegra.ph/file/ad97b118591b7800ab9d8.jpg",
  "https://telegra.ph/file/eb044c75d915030c690f7.jpg",
  "https://telegra.ph/file/85a3272990ae3d20e4582.jpg",
  "https://telegra.ph/file/ee15d32656ea7ea87b4bc.jpg",
  "https://telegra.ph/file/c30181ddef746cc853314.jpg",
  "https://telegra.ph/file/2ba48ee78f824d27cac27.jpg",
  "https://telegra.ph/file/2ba48ee78f824d27cac27.jpg",
  "https://telegra.ph/file/56f7306292f4ee781f09f.jpg",
  "https://telegra.ph/file/56f7306292f4ee781f09f.jpg",
  "https://telegra.ph/file/50fa0a6787f9b106df01c.jpg",
  "https://telegra.ph/file/32d4406ee5e1cc0f7163a.jpg",
  "https://telegra.ph/file/ded3d5f549f7b29fb5e0f.jpg",
  "https://telegra.ph/file/b9bf5ad89caa694ce7c73.jpg",
  "https://telegra.ph/file/52dd626ac44ac15e47fc8.jpg",
  "https://telegra.ph/file/dd60db0990cd505a4e50b.jpg",
  "https://telegra.ph/file/03d21c2ce1b06c4c23bf7.jpg",
  "https://telegra.ph/file/03d21c2ce1b06c4c23bf7.jpg",
  "https://telegra.ph/file/be83fa88e290369c97882.jpg",
  "https://telegra.ph/file/740ad1859c315fc322191.jpg",
  "https://telegra.ph/file/184bf10e5c1897c6a7adf.jpg",
  "https://telegra.ph/file/ec213ff76cb27ff975fea.jpg",
  "https://telegra.ph/file/557dd9b675438f6948187.jpg",
  "https://telegra.ph/file/c05adb1f1c4b6200f9f4b.jpg",
  "https://telegra.ph/file/748aca5e8ce87270a66c3.jpg",
  "https://telegra.ph/file/1f7212c1f0bfcb4c13104.jpg",
  "https://telegra.ph/file/ca5941dee6d67cbc97ce0.jpg",
  "https://telegra.ph/file/ecf7eef2f09000ef8a97f.jpg",
  "https://telegra.ph/file/52830c9088c96b2f2d9dc.jpg",
  "https://telegra.ph/file/48e1e809ee4a9801a31c0.jpg",
  "https://telegra.ph/file/8b7bc75df501d1aac9999.jpg",
  "https://telegra.ph/file/bfbd6dffb9cdd75c4565f.jpg",
  "https://telegra.ph/file/3ea1374109d9ea837c712.jpg",
  "https://telegra.ph/file/b83bb4de0cb6975393801.jpg",
  "https://telegra.ph/file/d4f04d317996ddbbcfa49.jpg",
  "https://telegra.ph/file/da7a7a09047bb3f77dd1e.jpg",
  "https://telegra.ph/file/45dfd7ef7f7780a3c1f83.jpg",
  "https://telegra.ph/file/ee405de996dd3e52e6feb.jpg",
  "https://telegra.ph/file/6f7860201f620215a1bd3.jpg",
  "https://telegra.ph/file/1fc7a06845f91cc3dbf17.jpg",
  "https://telegra.ph/file/6f2d56a83c667198645f3.jpg",
  "https://telegra.ph/file/f9435fd259a10eb3d4a2f.jpg",
  "https://telegra.ph/file/6f8cb1247e92ebaec48d4.jpg",
  "https://telegra.ph/file/5241d93b0d25644ed4a57.jpg",
  "https://telegra.ph/file/5241d93b0d25644ed4a57.jpg",
  "https://telegra.ph/file/b4076988422ce25d58dae.jpg",
  "https://telegra.ph/file/26b43b07faac626cf5e04.jpg",
  "https://telegra.ph/file/69e0a1a2f58757f132abd.jpg",
  "https://telegra.ph/file/9161c4becc39958ddec42.jpg",
  "https://telegra.ph/file/c529e024dd3b704a43fb6.jpg",
  "https://telegra.ph/file/9567e4783f0fa58c17fd5.jpg",
  "https://telegra.ph/file/0437e79f988ef2e8ce093.jpg",
  "https://telegra.ph/file/ffdf22318450354dc8d3c.jpg",
  "https://telegra.ph/file/c6b1ebb8aa4e23ee9150f.jpg",
"htps://telegra.ph/file/25a14cd4fff811de1475f.jpg",
"https://telegra.ph/file/645de7e8ce68ade591bb2.jpg",
"https://telegra.ph/file/4b540ca77c8b2a1d1ec57.jpg",
"https://telegra.ph/file/53a5a6a5b2d71c6d3c163.jpg",
"https://telegra.ph/file/48571aa7be63a3de59ff2.jpg",
"https://telegra.ph/file/553bca98fe9dec4270ad7.jpg",
"https://telegra.ph/file/87a7bda3cfde01d2348ed.jpg",
"https://telegra.ph/file/7c24e7540548c2d74d424.jpg",
"https://telegra.ph/file/60eeedd13a6bb5be507b5.jpg",
"https://telegra.ph/file/328d7865de1bd1971a557.jpg",
"https://telegra.ph/file/e4b0461725fc22520eda9.jpg",
"https://telegra.ph/file/9bb6046502993d6ce6518.jpg",
"https://telegra.ph/file/8890c73047805cf78c00a.jpg",
"https://telegra.ph/file/dc81295351494c2a1c472.jpg",
"https://telegra.ph/file/4232a1c385ff9da68aef6.jpg",
"https://telegra.ph/file/ea550661d8ab4b84c6296.jpg",
"https://telegra.ph/file/8b2190dc849e24972152c.jpg",
"https://telegra.ph/file/f207b57a1f51412a203e7.jpg",
"https://telegra.ph/file/cf2fccd900ff2d0d131a1.jpg",
"https://telegra.ph/file/940e82466ed78e975a745.jpg",
"https://telegra.ph/file/b0c749d5e802332dcc11f.jpg",
"https://telegra.ph/file/769d89ef7f7336bd05a80.jpg",
"https://telegra.ph/file/f9138226511b3a30e958b.jpg",
"https://telegra.ph/file/8281fdf957ebca93aec0f.jpg",
"https://telegra.ph/file/3c6dd91466c9ed89d2bf7.jpg",
"https://telegra.ph/file/8bcad0c566c5f51ffe5bb.jpg",
"https://telegra.ph/file/4ac11fe77b659d5168b1e.jpg",
"https://telegra.ph/file/c3fcd3e486c6a3bee6f4f.jpg",
"https://telegra.ph/file/31de70933034c724b74f1.jpg",
"https://telegra.ph/file/2d249ca2b62c18af6baa3.jpg",
"https://telegra.ph/file/ef8ebed7d971ce6de5ee9.jpg",
"https://telegra.ph/file/777fb5cb0f6be330f9b8a.jpg",
"https://telegra.ph/file/20aef78978a92b8b0444b.jpg",
"https://telegra.ph/file/20bc0e05daf3272ea89b9.jpg",
"https://telegra.ph/file/a915d3752bac387b81adf.jpg",
"https://telegra.ph/file/c20048814324dd1a1bb77.jpg",
"https://telegra.ph/file/3b945a8a14851ece29de7.jpg",
"https://telegra.ph/file/abf7e03745ca2d298a9c1.jpg",
"https://telegra.ph/file/13e4a77349596c5ab8a79.jpg",
"https://telegra.ph/file/32bc65b3c0baa1eb6c284.jpg",
"https://telegra.ph/file/1c231e0675b7f6edd579a.jpg",
"https://telegra.ph/file/c564473a41ab8405dc3b9.jpg",
"https://telegra.ph/file/aa8bd2a777b01d0b24f4d.jpg",
"https://telegra.ph/file/a915d3752bac387b81adf.jpg",
"https://telegra.ph/file/59c075e64bdd0e17b659f.jpg",
"https://telegra.ph/file/f7c59f1787705d36043ca.jpg",
"https://telegra.ph/file/c20048814324dd1a1bb77.jpg",
"https://telegra.ph/file/d9153d75fc60d64026525.jpg",
"https://telegra.ph/file/3b945a8a14851ece29de7.jpg",
"https://telegra.ph/file/1c678a25b8b6482bc3cba.jpg",
"https://telegra.ph/file/cbc63680e04511756d57a.jpg",
"https://telegra.ph/file/f7c59f1787705d36043ca.jpg",
"https://telegra.ph/file/58081f8a94dbd1d1caf40.jpg",
"https://telegra.ph/file/e1539e82d5bc96bc9f15e.jpg",
"https://telegra.ph/file/36efa93ee22207c36ad2d.jpg",
"https://telegra.ph/file/6df3e879dd9c2e908859f.jpg",
"https://telegra.ph/file/cbc63680e04511756d57a.jpg",
"https://telegra.ph/file/65dc15eb996d69742fcb9.jpg",
"https://telegra.ph/file/986928ae97ba48c5f54be.jpg",
"https://telegra.ph/file/92379479bbe99f312f13f.jpg",
"https://telegra.ph/file/c46fda1ffbbaa3c406a29.jpg",
"https://telegra.ph/file/0d32e11e4a0dae13dac3d.jpg",
"https://telegra.ph/file/13a65df594224f0c46561.jpg",
"https://telegra.ph/file/17d2fd7d6e0fbfe0d74dd.jpg",
"https://telegra.ph/file/98acc5caa337ba06407b5.jpg",
"https://telegra.ph/file/102561f89b0967f27ce63.jpg",
"https://telegra.ph/file/e4f06eb175994ef6ebd41.jpg",
"https://telegra.ph/file/bf3a36c8f30e56dcbbfa5.jpg",
"https://telegra.ph/file/3a5b3ea59347b2f8fb805.jpg",
"https://telegra.ph/file/60262d7d56b4352993e88.jpg",
"https://telegra.ph/file/11f780c3975d735d86578.jpg", 
"https://telegra.ph/file/e7edbeb4da9abd1d2c2c6.jpg",
"https://telegra.ph/file/7a3da590273681ad89d9e.jpg", 
"https://telegra.ph/file/e5bd6967d5a67e0b9eae7.jpg", 
"https://telegra.ph/file/563b43d5d86447064b112.jpg", 
"https://telegra.ph/file/23c56a0175a6cf2c102f9.jpg", 
"https://telegra.ph/file/bedc738279f1a52013bb7.jpg", 
"https://telegra.ph/file/4de19700d0ec9dbe746b2.jpg", 
"https://telegra.ph/file/036058466d2f840b20ce9.jpg", 
"https://telegra.ph/file/9b2ea20734c244d4f4e63.jpg", 
"https://telegra.ph/file/b08b6db354a4152808e64.jpg", 
"https://telegra.ph/file/948673286169c9d9a3598.jpg", 
"https://telegra.ph/file/eab318c38b6ad1104d146.jpg", 
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
await conn.sendMessage(m.chat, { react: { text: '😂', key: m.key } })
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['ميمز','ميم'] 

export default handler
