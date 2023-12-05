import globalStyles from '../../global.module.scss';
import pageGlobalStyles from '../pageGlobalStyle.module.scss';
import styles from './style.module.scss';

import { useCallback, useEffect, useState } from 'react';
import { useHttp } from "../../hooks/http.hook";

import SideNavbar from '../../components/SideNavbar';
import { DeleteIcon, NewIcon } from '../../ui/Icon';

function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const { request } = useHttp();

  const getData = useCallback(async () => {
    let responseData = await request({
      url: 'categories/getall'
    })

    setCategories(responseData);
  }, [request])

  const updateCategory = async (category) => {
    await request({
      url: 'categories/update',
      data: category,
      method: 'post'
    })
  }
  
  const deleteCategories = async (id) => {
    await request({
      url: 'categories/delete?id=' + id,
      method: 'delete'
    })
  }
  
  const createCategory = async (newCategory) => {
    await request({
      url: 'categories/creation',
      data: newCategory,
      method: 'post'
    })
  }

  useEffect(() => {
    getData();
  }, [getData])

  function handleInputChange(ind, category, nameValue, newValue) {
    let tempCategories = [...categories];
    tempCategories[ind][nameValue] = newValue;
    setCategories(tempCategories);

    updateCategory(category);
  }
  
  function handleDelete(category) {
    let tempCategories = categories.filter(it => it.id !== category.id);
    setCategories(tempCategories);

    deleteCategories(category.id);
  }

  async function handleCreateCategory() {
    let newCategory = {
      id: 0, 
      name: "New category"
    };

    await createCategory(newCategory);
    await getData();
  }

  return (
    <div className={globalStyles.container}>
      <div className={globalStyles.inner}>
        <SideNavbar currentTab="categories" />

        <div className={pageGlobalStyles.content}>
          <h1 className={pageGlobalStyles.title}>Категорії</h1>
          <div className={pageGlobalStyles.content_inner}>
            <button className={styles.button_new_category}
              onClick={handleCreateCategory}>
              <NewIcon />
              <span>Створити нову категорію</span>
            </button>
            <div className={styles.grid}>
              <span className={styles.cell + " " + styles.head_title}>ID</span>
              <span className={styles.cell + " " + styles.head_title}>Назва</span>
              <span className={styles.cell + " " + styles.head_title}><DeleteIcon/></span>

              {
                categories.map((category, ind) => {
                  return (
                    <>
                      <input key={category.id + 1} 
                        className={styles.cell + " " + styles.input}
                        type='text'
                        name='id'
                        value={category.id}/>
                      <input key={category.id + 2} 
                        className={styles.cell + " " + styles.input}
                        type='text'
                        name='name'
                        value={category.name}
                        onChange={(e) => handleInputChange(ind, category, 'name', e.currentTarget.value)}/>
                      
                      <button key={category.id + 3} 
                        className={styles.cell + " " + styles.delete_button}
                        onClick={() => handleDelete(category)}> 
                        <DeleteIcon className={styles.delete_icon}/>
                      </button>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
