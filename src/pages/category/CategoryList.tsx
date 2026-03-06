import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type Category from '../../models/Category'
import { AuthContext } from '../../contexts/authcontext/AuthContext'
import { findItems } from '../../services/Service'
import { ToastAlerta } from '../../utils/ToastAlert'
import { SyncLoader } from "react-spinners";
import CategoryCard from '../../components/category/categoryCard/CategoryCard'

function CategoryList() {

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categories, setCategories] = useState<Category[]>([])
  const { user, handleLogout } = useContext(AuthContext)
  const token = user.token

  function randomPhotoNumber():number {
    return Math.floor(Math.random() * (15 - 1 + 1)) + 1;
  }

  async function findCategories() {
    setIsLoading(true)
    try {
      await findItems("/categorias", setCategories, {
        headers: {
          Authorization: token,
        },
      });
    } catch(error: any) {
      if(error.toString().includes('401')) {
        handleLogout()
      } 
    } finally {
      setIsLoading(false)
    }
  }

  /* useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "warn");
      navigate("/");
    }
  }, [token]); */

  useEffect(() => {
    findCategories();
  }, [categories.length]);

  return (
    <>
      {isLoading && (
        <div>
          <SyncLoader color="#FE9A00" size={32} />
        </div>
      )}
      <div>
        {
          categories.map((cat) => (
            <CategoryCard  category={cat} key={cat.id} randomPhoto={randomPhotoNumber()}/>
          ))
        }
      </div>
    </>
  );
}

export default CategoryList