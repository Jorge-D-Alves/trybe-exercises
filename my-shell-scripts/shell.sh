#!/bin/bash
#Aqui fica um comentário
#echo "Meu primeiro script em Shell Script!" # Essa frase será exibida na tela
#echo "Criando um diretório"
#mkdir Hack-a-Planet
#echo "Aguarde"; sleep 1; echo .; sleep 1; echo .; sleep 1; echo .;  sleep 01
#echo "Diretório criado com sucesso!!"



 #HOSTNAME= `hostname`
 # echo " Este script está rodando em $HOSTNAME"

 

#FILE=./shell.sh

#if [ -e $FILE ]; then # o caminho existe?
 #   echo "O caminho $FILE está habilitado!"
 #   if [ -w $FILE ]; then # o usuario pode ler o arquivo?
 #   echo "você tem permissão para alterar $FILE"
 #   else 
  #      echo "você não tem permissão para editar $FILE"
 #   fi

#else 
#echo "O caminho $FILE não existe!"

#fi

 echo "Digite o caminho de um arquivo ou diretório:"
  read FILE
  if [ -f "$FILE" ]
    then
      echo "$FILE é um arquivo comum"
  elif [ -d "$FILE" ]
    then
      echo "$FILE é um diretório"
  else
      echo "$FILE é alguma outro tipo de arquivo ou pasta "
  fi
  ls -l $FILE