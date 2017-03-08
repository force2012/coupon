var user = {
    insert:'INSERT INTO my_table(name,\
     url, discountDesc,couponUrl,price,date,goodsId,monthlySales) \
     VALUES(?,?,?,?,?,?,?,?)',
    update:'update my_table set url=? where id=?',
    delete: 'delete from my_table where id=?',
    queryById: 'select * from my_table where id=?',
    queryAll: 'select * from my_table'
};

module.exports = user;