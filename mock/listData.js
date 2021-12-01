const getListData = (req, res) => {
  res.json({
    data: [
      { id: '000000001', title: '景点文物', state: 'Success', labels: [{name:'label1', color: 'error'}], created_at: '' },
      { id: '000000002', title: '神话传说', state: 'Success', labels: [{name:'label2', color: 'success'}], created_at: '' },
      { id: '000000003', title: '历史事件', state: 'Success', labels: [{name:'label3', color: 'error'}], created_at: '' },
      { id: '000000004', title: '成语故事', state: 'Success', labels: [{name:'label4', color: 'error'}], created_at: '' }
    ],
  });
};

export default {
  'GET /api/listData': getListData,
};

