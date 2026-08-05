import { useEffect, useState } from "react";

import { documentService } from "../../../services/api";

function useDocuments(){

    const [documents,setDocuments]=useState([]);

    const [loading,setLoading]=useState(true);

    const [searchTerm,setSearchTerm]=useState("");

    const [selectedType,setSelectedType]=useState("All");

    const [sortOption,setSortOption]=useState("Newest");

    const [viewMode,setViewMode]=useState("grid");

    async function loadDocuments(){

        try{

            const data=

                await documentService.getDocuments();

            setDocuments(Array.isArray(data) ? data : []);

        }

        catch(error){

            console.error(error);

        }

        finally{

            setLoading(false);

        }

    }

    useEffect(()=>{

        loadDocuments();

    },[]);

    async function deleteDocument(filename){

        try{

            await documentService.deleteDocument(filename);

            loadDocuments();

        }

        catch(error){

            console.error(error);

        }

    }

    return{

        documents,

        loading,

        searchTerm,

        setSearchTerm,

        selectedType,

        setSelectedType,

        sortOption,

        setSortOption,

        viewMode,

        setViewMode,

        loadDocuments,

        deleteDocument

    };

}

export default useDocuments;