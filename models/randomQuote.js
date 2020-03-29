import allWorkflows from '../../data-quality-and-summary.json';

export default (req, res) => {
  const { id: id } = req.query;
  let workflow = allWorkflows.workflow;

  if (id) {
    workflow = workflow.filter(wf => wf.id.toLowerCase().includes(id.toLowerCase()));
  }

  const awf = workflow[Math.floor(Math.random() * workflow.length)];

  res.status(200).json(awf);
};