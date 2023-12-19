import classes from './TransactionsDetails.module.css'
import NewFormModal from '../../Forms/ModalForm/NewFormModal';
import { Fragment, useEffect } from 'react';
import useFormCRUD from '../../utils/useFormCRUD';
import { DataGrid, GridColDef, gridClasses, GridRenderCellParams } from '@mui/x-data-grid';
import { Tooltip } from '@mui/material';
import { Form } from 'react-router-dom';
import { faL } from '@fortawesome/free-solid-svg-icons';
// import { getAuthToken } from '../../utils/auth';


const TransactionsDetails = () => {
  const { 
      modalOpen, removeFormId,
      getDataHandler, addDataHandler, deleteDataHandler, deleteForm,
      OpenModal, CloseModal, FormList 
  } = useFormCRUD("transactions");

  useEffect(() => {
      getDataHandler();
  },[])

  useEffect(() => {
      deleteDataHandler(removeFormId);
  },[removeFormId])

  const CustomcompareAmounts = (a: string, b: string) => {
    const amountA = parseFloat(a.replace('$', '')) || 0;
    const amountB = parseFloat(b.replace('$', '')) || 0;
    return amountA - amountB;
  };

  const renderCellWithTooltip = (params: GridRenderCellParams) => (
    <Tooltip title={params.value || ''}>
      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {params.value}
      </div>
    </Tooltip>
  );
    
  const getRowId = (row: any) => row.number;

  const columns : GridColDef[] = [
      { field: 'activityName', headerName: 'Name', flex : 1, renderCell: renderCellWithTooltip},
      { field: 'amountSpent', headerName: 'Amount', flex : 1, sortComparator: CustomcompareAmounts},
      { field: 'date', headerName: 'Date', flex : 1},
      { field: 'radioData', headerName: 'Category', flex : 1, filterable: false}, 
      {
        field: 'delete',
        headerName: 'Delete',
        width: 120,
        renderCell: (params: GridRenderCellParams) => (
          <button onClick={() => deleteForm(params.row.formid)}>Delete</button>),
        sortable: false,
        filterable: false

      },
    ];


    return(
        <Fragment>
          <div className={classes.container}>
            <div onClick={OpenModal} className={classes.addButton}><span style={{fontSize: "1.2rem"}}>+</span> Add new data</div>
            <div className={classes.gridcontainer}>
            <DataGrid sx={{ m: 1,[`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
              outline: 'none',},[`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:{outline: 'none',}, 
              }} rows={FormList} columns={columns} getRowId={getRowId}/>
            </div>
            {modalOpen ? (<NewFormModal CloseModal={CloseModal} submitData={addDataHandler} getData={getDataHandler} radioDataNeeded={true} category={"transactions"}/>) : null}
          </div>
        </Fragment>
    );
};

export default TransactionsDetails;