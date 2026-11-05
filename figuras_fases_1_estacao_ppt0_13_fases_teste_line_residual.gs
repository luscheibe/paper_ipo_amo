eve='1 2 3 4 5 6 7 8'
estacao='DJF'
nestacao='13'
year='1979-2024'
'set display color white'

* ================================================================
* Tamanho da amostra (dias) por fase da MJO, estacao e grupo ENSO
* Fonte: relatorios de dias com MJO ativa
* ================================================================

* ---- All years ----
ndias_DJF=''
ndias_MAM=''
ndias_JJA=''
ndias_SON=''


* Carregar a fonte Arial (ajuste o caminho para o seu sistema)
'set font 10 file /usr/share/fonts/truetype/msttcorefonts/Arial.ttf'

* Definir o tamanho da fonte: 0.125 = 9pt (aproximadamente)
'set strsiz 0.125 0.125'


*## COR DE FUNDO #
if ( 0 = 0 )
* BRANCO:
  'set rgb 99 255 255 255'
else
* CINZA:
  'set rgb 99 210 210 210'
endif
*#################

'c'

*#### MASCARA ####
if ( 0 = 1 )
  'sdfopen /geral/dados/mascaras/maskarea.mundo'
  'set lon 0 360'
  'define mask=mas'
  'close 1'
endif
*#################
'sdfopen residual_phase1_djf.nc'
'sdfopen ipo+_amo-_phase1_djf.nc'

'sdfopen residual_phase2_djf.nc'
'sdfopen ipo+_amo-_phase2_djf.nc'

'sdfopen residual_phase3_djf.nc'
'sdfopen ipo+_amo-_phase3_djf.nc'

'sdfopen residual_phase4_djf.nc'
'sdfopen ipo+_amo-_phase4_djf.nc'

'sdfopen residual_phase5_djf.nc'
'sdfopen ipo+_amo-_phase5_djf.nc'

'sdfopen residual_phase6_djf.nc'
'sdfopen ipo+_amo-_phase6_djf.nc'

'sdfopen residual_phase7_djf.nc'
'sdfopen ipo+_amo-_phase7_djf.nc'

'sdfopen residual_phase8_djf.nc'
'sdfopen ipo+_amo-_phase8_djf.nc'


j=1
m=1
while(j<=1)

i=1
h=1

while(i<=17)
est=subwrd(estacao,j)
nest=subwrd(nestacao,j)
evstr=subwrd(eve,h)


if ( est = 'DJF' )
  ndias = ndias_DJF
endif

if ( est = 'MAM' )
  ndias = ndias_MAM
endif

if ( est = 'JJA' )
  ndias = ndias_JJA 
endif

if ( est = 'SON' )
  ndias = ndias_SON
endif

namostra = subwrd(ndias,h)

*#### CONFIGS ####
'set lat -48.5 13.5'
'set lon 270.5 327.5'
'set t 1'
'set z 1'

*'set lat -48.5 13.5'
*'set lon 275.5 328'
*'set lon 275.5 329.5'
*'set lon -82.5 -31.5'
*'set t 'nest''

*#################

*#################

*##### GERAL #####
'set grads off'
# define uma nova espessura no indice 13
'set lwid 13 0.3' 
#'set grid vertical 5 81 13' 81 é a linha cinza
'set grid vertical 5 15 2'
'set frame on 1 1'
*#################

*### XY LABELS ###
'set xlab off'
'set ylab off'

if ( 1 = 1 )
    'set xlab on'
    'set ylab on'
    'set ylint 10'
endif
*#################

*##### LABEL #####
'set clab off'
if( 0 = 1 )
    'set clab on'
    'set clopts 1 4 0.08'
endif
*#################
say 'PHASE 'm''
#'subplot3_ppt 8 'm' 8 -y 1.5'
#'subplot3_ppt 8 'm' 1 -ys -0.1 -y 1.192'
'subplot3_ppt 8 'm' 1 -ys -0.1 -y 1.192 -xy 0.821'

'set mpdraw off'
'set mproj scaled'
#'set mproj latlon'
#'set map 1 1 3'
#'set mpdset lowres'
#'set poli off' 

*#########
'fshade -1 1 12 fresco'
'set clevs -4 -3 -2 -1 0 1 2 3 4'
'set ccols 16 17 18 20 21 23 24 25 26 27'

*#########

'set gxout grfill'
'set csmooth off'
if ( 90 = 90 )
'set cmin 90'
else
'set cmin 80'
endif
   if ( m = 1 | m = 2 | m = 3 | m = 4 | m = 5 | m = 6 | m = 7 | m = 8 )
'set ylab on'
'set ylopts 1 1 0.34'
endif

    if ( m = 5 | m = 6 | m = 7 | m = 8 )
*#'set ylab on'
*#'set ylpos 0 r'
*#'set ylopts 1 1 0.17'
    endif


'set xlab on'
'set xlint 15'
'set xlopts 0 1 0.34'

if ( m = 8)
'set xlab on'
'set xlint 15'
'set xlopts 1 1 0.34'
endif

'd v1.'i''


*# if ( m = 1 | m = 9 )
*# 'draw title 'est''
*# endif


*#if ( m = 8 | m = 16 )
*# 'xcbar -fo center -ft 50 -yo -0.2'
*#'cbarn1'
*#endif

*#################
i=i+1
**#################
'set rgb 55 120 120 120'

#* === RESETA AS CONFIGURAÇÕES DA PALETA ===
#* Remove os níveis de contorno anteriores
'set clevs'     
#* Define uma paleta mínima (cor 0 e cor 55)      
'set ccols 0 55'      
#* ==========================================

**#### HATCHES #####
'set gxout contour'
'set cthick 1'
'set ccolor 55'
'set csmooth on'
'set cmax -200'
#'d v1.'i''
#'set rgb 81 60 60 60'
'set rgb 81 40 40 40'
* 1. Garante que as dimensões do GrADS estão em 1 para plotar o hatch
'set t 1'
'set z 1'

* 2. Chama o hatch explicitamente apontando para o arquivo da confiança (ex: .2)
* Adicione o .2 (ou o número correspondente ao arquivo da confiança) grudado na variável:
'hatch confianca.'i'(t=1,z=1) -100 -90 -color 81 -angle 0 -int 0.05 -thickness 13'
'hatch confianca.'i'(t=1,z=1) -100 -90 -color 81 -angle 90 -int 0.05 -thickness 13'

'hatch confianca.'i'(t=1,z=1) 90 100 -color 81 -angle 0 -int 0.05 -thickness 13'
'hatch confianca.'i'(t=1,z=1) 90 100 -color 81 -angle 90 -int 0.05 -thickness 13'

*#################


'set line 1 1 1'
'draw shp /home2/luanaaparecida/gscript/ne_110m_admin_0_countries_lakes.shp'

*# 'set line 2 1 3'
*# 'drawline Lat 0'

'set line 1 1 3'
'drawstr -p 12 1 -t "'evstr'" -b 0 -z 0.34'

'set line 1 1 13'
'drawstr -p 5 -t "n= 'namostra'" -z 0.28'

#if ( DJF = "DJF" | DJF = "JJA" )
#if ( i = 16 )
#'subplot3_ppt 1 'm' 1'
#'cbarn'
#'cbarn_modificado * * 3.65 6.55 * -0 0.09 0.2 0.6 0.5'
#endif
#endif

#if ( 1 = 1 )
#'set vpage off'
#'drawstr -t "'est'" -xo -0.33 -yo 2.6 -z 0.15'
#endif

if ( Period1 = LN)
if ( i = 8 )
'cbarn_modificado * * 1.8 5.5 * -0 0.09 0.2 0.6 0.2'
endif
endif 

if ( m = 1 )
'set vpage off'
* Carregar a fonte Arial (ajuste o caminho para o seu sistema)
'set font 10 file /usr/share/fonts/truetype/msttcorefonts/Arial.ttf'

* Definir o tamanho da fonte: 0.125 = 9pt (aproximadamente)
*'set strsiz 0.125 0.125'
* Definir o tamanho da fonte: 0.125 = 9pt (aproximadamente)
'set strsiz 0.155 0.155'

'drawstr -t "Period1" -xo -1.5 -yo 3.95'
endif


h=h+1
*#################
*#say 'd v1.'i''
i=i+1
m=m+1



endwhile

j=j+1

endwhile
#'gxprint ./CPANOM_ppt0_Eventos_Primarios_'est'_1979-2009_categorias.eps'

'gxprint ppt0_DJF_fases_line.eps x704'
'gxprint ppt0_DJF_fases_line.png x704'
'c'

'quit'


**********************************************
function rgb(NCOR)
stpng=NCOR*2+1
i=0
'!rm -f .pipe'
while(i<stpng)
  '!palheta 'i/(stpng-1)' rainbow >> .pipe'
  i=i+1
endwhile
i=0
while(i<stpng)
  rc=read('.pipe')
  res=sublin(rc,2)
  r=subwrd(res,3)
  g=subwrd(res,6)
  b=subwrd(res,9)
  'set rgb 'i+16' 'r' 'g' 'b
  i=i+1
endwhile
rc=close('.pipe')
'!rm -f .pipe'
return
**********************************************

**********************************************
function calclevs(NIVELSIG, NCOR)
k=1
levs='-'NIVELSIG' 'NIVELSIG
dx=(100-NIVELSIG)/NCOR
ltemp=NIVELSIG
while (k<NCOR)
    ltemp=ltemp+dx
    levs=-ltemp' 'levs' 'ltemp
    k=k+1
endwhile
*#say levs
'set clevs 'levs
k=1
cols='16'
while(k<NCOR)
    cols=cols' 'k+16
    k=k+1
endwhile
cols=cols' '0
k=0
while(k<NCOR)
    cols=cols' 'k+16+NCOR
    k=k+1
endwhile
*#say 'cols= 'cols
'set ccols 'cols
return
**********************************************
